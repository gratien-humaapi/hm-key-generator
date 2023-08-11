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
import { useEffect, useState } from "react";
import generatePassword from "../../utils/password-gen";
import { useClipboard } from "@mantine/hooks";

export { Page };

function Page() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const clipboard = useClipboard({ timeout: 500 });

  useEffect(() => {
    generatePass();
  }, []);
  function generatePass() {
    const pass = generatePassword(passwordLength);
    setPassword(pass);
  }

  return (
    <>
      <div className="main">
        <div className="content">
          <div className="up">
            <div className="header">
              <h1 className="title">Key Generator</h1>
              <span className="description">
                Create strong and secure passwords to keep your account safe
                online.
              </span>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "100%" }}>
                <Input
                  radius="xl"
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
                      // size="sm"
                      max={40}
                      min={8}
                      value={passwordLength}
                      onChange={setPasswordLength}
                    />
                  </div>
                </div>
              </div>

              <Button
                radius="xl"
                ml="sm"
                disabled={password.trim() === ""}
                color={clipboard.copied ? "teal" : "primary.0"}
                onClick={() => clipboard.copy(password)}
              >
                {clipboard.copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
          <div className="footer">
            Powered by <span className="company-name">Humaapi</span>
          </div>
        </div>
      </div>
    </>
  );
}
