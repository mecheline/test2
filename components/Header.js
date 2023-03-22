import Link from "next/link";

export const Header = () => {
  return (
    <nav class="navbar navbar fixed-top navbar-expand-lg bg-light">
      <div class="container">
        <Link href="/" legacyBehavior>
          <a class="navbar-brand">Kunda Test</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-center"
          id="navbarTogglerDemo02"
        >
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/" legacyBehavior>
                <a class="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
