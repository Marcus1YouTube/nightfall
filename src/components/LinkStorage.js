import { Button, Drawer } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

export function LinkStorage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bottom">
        <Button variant="solid" onClick={() => setOpen(true)}>
          Linktár megnyitása
        </Button>
      </div>
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        title="Linktár"
        position="bottom"
        className="link-storage"
        transition="pop"
      >
        <div className="links">
          <Link to="/">
            <Button variant="outline" className="links-buttons">
              Főoldal
            </Button>
          </Link>
          <Link to="/szabalyok">
            <Button variant="outline" className="links-buttons">
              Szerver szabályok
            </Button>
          </Link>
          <Link to="/fogalmak">
            <Button variant="outline" className="links-buttons">
              RP Fogalmak
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
