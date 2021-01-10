import React, { useState } from "react";
import { AppBar, Fade, Toolbar } from "@material-ui/core";

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div>
        <AppBar className="header-container">
          <div className="top-bar">
            <a className="menu-toggle" onClick={() => setOpen(!open)}>
              <span>Menu</span>
            </a>
            {open && (
              <Fade in={open}>
                <nav id="main-nav-wrap">
                  <ul className="main-navigation">
                    <li>
                      <a className="smoothscroll" href="#about" title="">
                        Sobre mí
                      </a>
                    </li>
                    <li>
                      <a className="smoothscroll" href="#resume" title="">
                        Currículum
                      </a>
                    </li>
                    <li>
                      <a className="smoothscroll" href="#contact" title="">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </nav>
              </Fade>
            )}
          </div>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
