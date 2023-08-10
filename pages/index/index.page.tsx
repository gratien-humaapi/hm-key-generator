import Refresh from "./icons";
import {
  CopyButton,
  Button,
  Input,
  Tooltip,
  ActionIcon,
  Slider,
  Flex,
} from "@mantine/core";
import "./index.css";
import { useState } from "react";
import generatePassword from "../../utils/password-gen";

export { Page };

function Page() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);

  function generatePass() {
    const pass = generatePassword();
    setPassword(pass);
  }
  return (
    <>
      <div className="main">
        <div className="content">
          <div className="header">
            <h1 className="title">Key Generator</h1>
            <span className="description">
              Create strong and secure passwords to keep your account safe
              online.
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              {/* <input type="text" /> */}
              <Input
                radius="xl"
                w={450}
                value={password}
                // readOnly
                onChange={(event) => setPassword(event.target.value)}
                rightSection={
                  <Tooltip label="Generate" position="top" withArrow>
                    <ActionIcon onClick={() => generatePass()}>
                      <Refresh />
                    </ActionIcon>
                  </Tooltip>
                }
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "10px",
                  marginTop: "6px",
                  width: "100%",
                }}
              >
                Password length: {passwordLength}
                <div style={{ width: "100%" }}>
                  <Slider
                    max={40}
                    min={8}
                    value={passwordLength}
                    onChange={setPasswordLength}
                  />
                </div>
              </div>
            </div>
            {/* <button className="copy-btn">Copy</button> */}
            <CopyButton value={password}>
              {({ copied, copy }) => (
                <Button
                  radius="xl"
                  ml="sm"
                  disabled={password.trim() === ""}
                  color={copied ? "teal" : "primary.0"}
                  onClick={copy}
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
              )}
            </CopyButton>
          </div>

          <div className="footer">
            Powered by <span className="company-name">Humaapi</span>
          </div>
        </div>
      </div>
    </>
  );
}
