;;; publish.el --- Org publishing config for asv.github.io -*- lexical-binding: t; -*-

(require 'ox-publish)
(require 'subr-x)

(defgroup asv/blog nil
  "Publishing settings for asavchenkodev.github.io."
  :group 'org)

(defcustom asv/blog-goatcounter-endpoint "https://asv.goatcounter.com/count"
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

(defun asv/blog-html-head ()
  "Return shared HTML <head> additions for all pages."
  (concat
   "<link rel=\"stylesheet\" href=\"/style.css\" type=\"text/css\"/>"
   (if asv/blog-goatcounter-endpoint
       (format
        "\n<script data-goatcounter=\"%s\" async src=\"https://gc.zgo.at/count.js\"></script>"
        asv/blog-goatcounter-endpoint)
     "")))

(defun asv/blog-postamble (info))

(setq org-publish-project-alist
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
         :base-extension "css\\|txt\\|jpg\\|gif\\|png\\|svg\\|webp\\|ico\\|js\\|html"
         :publishing-function org-publish-attachment)

        ("blog" :components ("blog-org" "blog-assets"))))

(defun asv/blog-publish-all ()
  "Publish all pages and assets for this site."
  (interactive)
  (org-publish "blog" t))

(provide 'asv-blog-publish)
