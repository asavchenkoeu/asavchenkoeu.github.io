;;; publish.el --- Org publishing config for asv.github.io -*- lexical-binding: t; -*-

(require 'ox-publish)
(require 'subr-x)

(defgroup asv/blog nil
  "Publishing settings for asavchenkodev.github.io."
  :group 'org)

(defconst asv/blog-goatcounter-default-endpoint
  "https://asv.goatcounter.com/count"
  "Default GoatCounter endpoint for this site.")

(defcustom asv/blog-goatcounter-endpoint asv/blog-goatcounter-default-endpoint
  "Optional GoatCounter endpoint, for example https://example.goatcounter.com/count.
When nil, analytics script is not added."
  :type '(choice (const :tag "Disabled" nil)
                 (string :tag "Endpoint URL"))
  :group 'asv/blog)

(defconst asv/blog-root
  (file-name-directory (or load-file-name buffer-file-name))
  "Root directory for publishing config.")

(defconst asv/blog-content-dir
  (expand-file-name "content/" asv/blog-root)
  "Directory with Org sources and static assets.")

(defconst asv/blog-public-dir
  (expand-file-name "../docs/" asv/blog-root)
  "Directory where generated files are written.")

(defun asv/blog-enable-goatcounter ()
  "Ensure GoatCounter is enabled for this site publish run."
  (unless (and (stringp asv/blog-goatcounter-endpoint)
               (not (string-empty-p asv/blog-goatcounter-endpoint)))
    (setq asv/blog-goatcounter-endpoint asv/blog-goatcounter-default-endpoint)))

(defun asv/blog-stylesheet-link ()
  "Return the shared stylesheet link tag."
  "<link rel=\"stylesheet\" href=\"/style.css\" type=\"text/css\"/>")

(defun asv/blog-goatcounter-script ()
  "Return the GoatCounter script tag, or nil when tracking is disabled."
  (when asv/blog-goatcounter-endpoint
    (format
     "<script data-goatcounter=\"%s\" async src=\"https://gc.zgo.at/count.js\"></script>"
     asv/blog-goatcounter-endpoint)))

(defun asv/blog-html-head ()
  "Return shared HTML <head> additions for all pages."
  (concat
   (asv/blog-stylesheet-link)
   (if asv/blog-goatcounter-endpoint
       (concat "\n" (asv/blog-goatcounter-script))
     "")))

(defun asv/blog-add-goatcounter-to-html (html)
  "Inject GoatCounter into HTML before </head> when possible."
  (let ((script (asv/blog-goatcounter-script)))
    (if (and script
             (string-match-p "</head>" html)
             (not (string-match-p "data-goatcounter=" html)))
        (replace-regexp-in-string
         "</head>"
         (concat script "\n</head>")
         html
         t
         t)
      html)))

(defun asv/blog-publish-html-asset (plist filename pub-dir)
  "Publish static HTML assets and inject the shared tracking script."
  (let* ((base-dir (file-name-as-directory (plist-get plist :base-directory)))
         (source-file (expand-file-name filename base-dir))
         (output-file (expand-file-name (file-name-nondirectory source-file) pub-dir)))
    (make-directory (file-name-directory output-file) t)
    (with-temp-buffer
      (insert-file-contents source-file)
      (write-region
       (asv/blog-add-goatcounter-to-html (buffer-string))
       nil
       output-file
       nil
       'silent))
    output-file))

(defun asv/blog-postamble (info))

(defun asv/blog-project-alist ()
  "Return the Org publish projects for the site.
This is a function so dynamic head content is rebuilt on each publish."
  `(("blog-org"
     :recursive t
     :base-directory ,asv/blog-content-dir
     :publishing-directory ,asv/blog-public-dir
     :base-extension "org"
     :exclude "preamble\\.org"
     :publishing-function org-html-publish-to-html

     :html-doctype "html5"
     :html-html5-fancy t
     :html-head-include-scripts nil
     :html-head-include-default-style nil
     :html-head ,(asv/blog-html-head)
     :html-validation-link nil
     :html-postamble asv/blog-postamble

     :section-numbers nil
     :with-toc nil)

    ("blog-assets"
     :recursive t
     :base-directory ,asv/blog-content-dir
     :publishing-directory ,asv/blog-public-dir
     :base-extension "css\\|txt\\|jpg\\|gif\\|png\\|svg\\|webp\\|ico\\|js\\|json"
     :publishing-function org-publish-attachment)

    ("blog-html-assets"
     :recursive t
     :base-directory ,asv/blog-content-dir
     :publishing-directory ,asv/blog-public-dir
     :base-extension "html"
     :publishing-function asv/blog-publish-html-asset)

    ("blog" :components ("blog-org" "blog-assets" "blog-html-assets"))))

(defun asv/blog-configure-publish-projects ()
  "Install the current site publish projects into Org."
  (asv/blog-enable-goatcounter)
  (setq org-publish-project-alist (asv/blog-project-alist)))

(asv/blog-configure-publish-projects)

(defun asv/blog-publish-all ()
  "Publish all pages and assets for this site."
  (interactive)
  (asv/blog-configure-publish-projects)
  (org-publish "blog" t))

(provide 'asv-blog-publish)
