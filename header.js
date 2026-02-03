// Generate and inject the shared header
(function () {
  // Determine the base path based on the script's location
  const scripts = document.getElementsByTagName("script");
  const currentScript = scripts[scripts.length - 1];
  const scriptSrc = currentScript.getAttribute("src");

  // If script is in a subdirectory (src contains '../'), we're in a subdirectory
  const basePath = scriptSrc && scriptSrc.startsWith("../") ? "../" : "";

  // Generate the header HTML directly
  const headerHTML = `
        <header>
            <a href="/" class="logo-link">
                <img src="${basePath}logo.svg" alt="Chomp Workshop" class="logo" />
            </a>
            <nav class="nav-circles">
                <a href="/" class="nav-circle" aria-label="Home">
                    <img src="${basePath}icons/home.svg" alt="" class="nav-icon" />
                </a>
                <a href="https://www.aeronib.com/" class="nav-circle" aria-label="Main Site">
                    <img src="${basePath}icons/navigation.svg" alt="" class="nav-icon" />
                </a>
                <a href="https://www.linkedin.com/in/cfriedenberger/" class="nav-circle" aria-label="LinkedIn">
                    <img src="${basePath}icons/ln.svg" alt="" class="nav-icon" />
                </a>
            </nav>
        </header>
    `;

  // Insert the header at the beginning of the body
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
})();
