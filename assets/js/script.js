! function(o, c) {
            var n = c.documentElement,
                t = " w-mod-";
            n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
        }(window, document);





function initAccordionCSS() {
                                    document.querySelectorAll('[data-accordion-css-init]').forEach((accordion) => {
                                        const closeSiblings = accordion.getAttribute('data-accordion-close-siblings') === 'true';

                                        accordion.addEventListener('click', (event) => {
                                            const toggle = event.target.closest('[data-accordion-toggle]');
                                            if (!toggle) return; // Exit if the clicked element is not a toggle

                                            const singleAccordion = toggle.closest('[data-accordion-status]');
                                            if (!singleAccordion) return; // Exit if no accordion container is found

                                            const isActive = singleAccordion.getAttribute('data-accordion-status') === 'active';
                                            singleAccordion.setAttribute('data-accordion-status', isActive ? 'not-active' : 'active');

                                            // When [data-accordion-close-siblings="true"]
                                            if (closeSiblings && !isActive) {
                                                accordion.querySelectorAll('[data-accordion-status="active"]').forEach((sibling) => {
                                                    if (sibling !== singleAccordion) sibling.setAttribute('data-accordion-status', 'not-active');
                                                });
                                            }
                                        });
                                    });
                                }

                                // Initialize Accordion CSS
                                document.addEventListener('DOMContentLoaded', () => {
                                    initAccordionCSS();
                                });

gsap.registerPlugin(Flip, SplitText, CustomEase, ScrollToPlugin, ScrambleTextPlugin, ScrollTrigger);

! function() {
            var u = window.UnicornStudio;
            if (u && u.init) {
                if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", function() {
                        u.init()
                    })
                } else {
                    u.init()
                }
            } else {
                window.UnicornStudio = {
                    isInitialized: !1
                };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js", i.onload = function() {
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", function() {
                            UnicornStudio.init()
                        })
                    } else {
                        UnicornStudio.init()
                    }
                }, (document.head || document.body).appendChild(i)
            }
        }();

function initCopyEmailClipboard() {
            const buttons = document.querySelectorAll('.copy-email-button');
            if (!buttons.length) return;

            const copyEmail = (button) => {
                // Email to copy to clipboard is taking from the button itself, or if that's empty,
                // from a text element inside the button
                const email =
                    button.getAttribute('data-copy-email') ||
                    button.querySelector('[data-copy-email-element]').textContent.trim();
                if (email) {
                    navigator.clipboard.writeText(email).then(() => {
                        button.setAttribute('data-copy-button', 'copied');
                        button.setAttribute('aria-label', 'Email copied to clipboard!');
                    });
                }
            };

            const handleInteraction = (e) => {
                if (
                    e.type === 'click' ||
                    (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))
                ) {
                    e.preventDefault();
                    copyEmail(e.currentTarget);
                }
            };

            buttons.forEach((button) => {
                button.addEventListener('click', handleInteraction);
                button.addEventListener('keydown', handleInteraction);
                button.addEventListener('mouseleave', () => {
                    // Remove 'active' attribute to reset color and text transform
                    button.removeAttribute('data-copy-button');
                    // Remove focus on mouseleave to clear keyboard focus styling
                    button.blur();
                    button.setAttribute('aria-label', 'Copy email to clipboard');
                });
                button.addEventListener('blur', () => {
                    button.removeAttribute('data-copy-button');
                    button.setAttribute('aria-label', 'Copy email to clipboard');
                });
            });
        }

        // Initialize Copy Email to Clipboard Button
        document.addEventListener('DOMContentLoaded', () => {
            initCopyEmailClipboard();
        });