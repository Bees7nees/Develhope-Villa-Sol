

export function ContactPanel() {
  return (
    <div
      className="ContactPanel"
      style={{
        width: 545,
        height: 626,
        paddingTop: 30,
        paddingBottom: 27,
        paddingLeft: 34.06,
        paddingRight: 34.06,
        background: "white",
        boxShadow:
          "0px 5.449999809265137px 5.449999809265137px rgba(0, 0, 0, 0.25)",
        borderRadius: 16.35,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        gap: 17,
        display: "inline-flex",
      }}
    >
      <div
        className="ContactPanelComponent"
        style={{
          width: 476.88,
          flex: "1 1 0",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 15,
          display: "flex",
        }}
      >
        <div
          className="NavigationTopNavigationBar"
          style={{
            alignSelf: "stretch",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 12,
            paddingBottom: 12,
            background: "white",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            display: "inline-flex",
          }}
        >
          <div
            className="ArrowBackIosNew"
            style={{
              width: 24,
              height: 24,
              position: "relative",
              transform: "rotate(-90deg)",
              transformOrigin: "0 0",
            }}
          >
            <div
              className="BoundingBox"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                transform: "rotate(-90deg)",
                transformOrigin: "0 0",
                background: "#D9D9D9",
              }}
            />
            <div
              className="ArrowBackIosNew"
              style={{
                width: 9.45,
                height: 16.96,
                left: 3.51,
                top: -6.83,
                position: "absolute",
                transform: "rotate(-90deg)",
                transformOrigin: "0 0",
                background: "#1C1B1F",
              }}
            ></div>
          </div>
          <div
            className="ContactTitle"
            style={{
              flex: "1 1 0",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "flex",
            }}
          >
            <div
              className="Contact"
              style={{
                flex: "1 1 0",
                textAlign: "center",
                color: "#1C1B1F",
                fontSize: 32,
                fontFamily: "Playfair Display",
                fontWeight: "700",
                lineHeight: 40,
                wordWrap: "break-word",
              }}
            >
              Contact
            </div>
          </div>
        </div>
        <div
          className="Section"
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 33,
            display: "flex",
          }}
        >
          <div
            className="InputSection"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 27.25,
              display: "flex",
            }}
          >
            <div
              className="NameInput"
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 6.81,
                display: "flex",
              }}
            >
              <div
                className="Name"
                style={{
                  color: "#1C1B1F",
                  fontSize: 16,
                  fontFamily: "Spline Sans Mono",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                Name
              </div>
              <div
                className="EnterUsernamePlaceholder"
                style={{ width: 476.87, height: 61.31, position: "relative" }}
              >
                <div
                  className="LabelBg"
                  style={{
                    width: 476.87,
                    height: 61.31,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "white",
                    boxShadow:
                      "0px 2.7249999046325684px 2.7249999046325684px rgba(0, 0, 0, 0.18)",
                    borderRadius: 12.26,
                    border: "1.36px #8AA8C4 solid",
                  }}
                />
                <div
                  className="Content"
                  style={{
                    left: 13.62,
                    top: 13.62,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6.81,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Icons"
                    style={{
                      width: 35.42,
                      height: 35.42,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Ellipse10"
                      style={{
                        width: 10.9,
                        height: 10.9,
                        left: 12.26,
                        top: 8.17,
                        position: "absolute",
                        background: "#D8E2EB",
                        borderRadius: 9999,
                        border: "1.36px #8AA8C4 solid",
                      }}
                    />
                    <div
                      className="Ellipse11"
                      style={{
                        width: 21.8,
                        height: 12.26,
                        left: 6.81,
                        top: 20.44,
                        position: "absolute",
                        background: "#D8E2EB",
                        borderRadius: 9999,
                        border: "1.36px #8AA8C4 solid",
                      }}
                    />
                    <div
                      className="Ellipse9"
                      style={{
                        width: 35.42,
                        height: 35.42,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        borderRadius: 9999,
                        border: "1.36px #8AA8C4 solid",
                      }}
                    />
                  </div>
                  <div
                    className="EnterUsername"
                    style={{
                      color: "#D8E2EB",
                      fontSize: 16.35,
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    |
                  </div>
                </div>
              </div>
            </div>
            <div
              className="EmailInput"
              style={{ width: 476.88, height: 88.56, position: "relative" }}
            >
              <div
                className="EmailAddress"
                style={{
                  left: 0,
                  top: 0,
                  position: "absolute",
                  color: "#1C1B1F",
                  fontSize: 16,
                  fontFamily: "Spline Sans Mono",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                Email Address
              </div>
              <div
                className="EnterAddressPlaceholder"
                style={{
                  width: 476.88,
                  height: 61.31,
                  left: 0,
                  top: 27.25,
                  position: "absolute",
                }}
              >
                <div
                  className="Rectangle8"
                  style={{
                    width: 476.88,
                    height: 61.31,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "white",
                    boxShadow:
                      "0px 2.7249999046325684px 2.7249999046325684px rgba(0, 0, 0, 0.18)",
                    borderRadius: 12.26,
                    border: "1.36px #8AA8C4 solid",
                  }}
                />
                <div
                  className="Content"
                  style={{
                    left: 13.62,
                    top: 13.62,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6.81,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Email"
                    style={{
                      width: 35.42,
                      height: 35.42,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Ellipse12"
                      style={{
                        width: 35.42,
                        height: 35.42,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        borderRadius: 9999,
                        border: "1.36px #8AA8C4 solid",
                      }}
                    />
                    <div
                      className="Rectangle11"
                      style={{
                        width: 19.08,
                        height: 13.62,
                        left: 8.18,
                        top: 10.9,
                        position: "absolute",
                        background: "#D8E2EB",
                        borderRadius: 1.36,
                        border: "0.68px #8AA8C4 solid",
                      }}
                    />
                  </div>
                  <div
                    className="EnterEmailAddress"
                    style={{
                      color: "#B1C5D8",
                      fontSize: 16,
                      fontFamily: "Spline Sans Mono",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Enter your email
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="OtherCommentsSection"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 13.62,
              display: "flex",
            }}
          >
            <div
              className="Comments"
              style={{ width: 476.88, height: 163.5, position: "relative" }}
            >
              <div
                className="TextSection"
                style={{
                  width: 476.88,
                  height: 163.5,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "white",
                  boxShadow:
                    "0px 2.7249999046325684px 2.7249999046325684px rgba(0, 0, 0, 0.18)",
                  borderRadius: 12.26,
                  border: "1.36px #8AA8C4 solid",
                }}
              />
              <div
                className="MoreTool"
                style={{
                  width: 20.44,
                  height: 20.44,
                  left: 449.62,
                  top: 136.25,
                  position: "absolute",
                }}
              >
                <div
                  className="Line1"
                  style={{
                    width: 14.45,
                    height: 0,
                    left: 8.67,
                    top: 18.99,
                    position: "absolute",
                    transform: "rotate(-45deg)",
                    transformOrigin: "0 0",
                    border: "1.36px #8AA8C4 solid",
                  }}
                ></div>
                <div
                  className="Line3"
                  style={{
                    width: 7.23,
                    height: 0,
                    left: 14.93,
                    top: 19.47,
                    position: "absolute",
                    transform: "rotate(-45deg)",
                    transformOrigin: "0 0",
                    border: "1.36px #8AA8C4 solid",
                  }}
                ></div>
                <div
                  className="Line2"
                  style={{
                    width: 28.9,
                    height: 0,
                    left: 0,
                    top: 20.44,
                    position: "absolute",
                    transform: "rotate(-45deg)",
                    transformOrigin: "0 0",
                    border: "1.36px #8AA8C4 solid",
                  }}
                ></div>
              </div>
              <div
                className="AddYourComments"
                style={{
                  left: 13.62,
                  top: 13.62,
                  position: "absolute",
                  color: "#8AA8C4",
                  fontSize: 16,
                  fontFamily: "Spline Sans Mono",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                Add your comments...
              </div>
            </div>
          </div>
        </div>
        <div
          className="Button"
          style={{
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            gap: 40.88,
            display: "inline-flex",
          }}
        >
          <div
            className="CancleButton"
            style={{
              padding: 13.62,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 13.62,
              display: "flex",
            }}
          >
            <div
              className="Cancel"
              style={{
                color: "#628BB1",
                fontSize: 20,
                fontFamily: "Spline Sans Mono",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Cancel
            </div>
          </div>
          <div
            className="SubmitButton"
            style={{
              width: 204.38,
              height: 61.31,
              paddingLeft: 14.99,
              paddingRight: 14.99,
              paddingTop: 9.54,
              paddingBottom: 9.54,
              background: "#628BB1",
              boxShadow:
                "1.3624999523162842px 2.7249999046325684px 2.7249999046325684px rgba(0, 0, 0, 0.40)",
              borderRadius: 10.9,
              justifyContent: "center",
              alignItems: "center",
              gap: 13.62,
              display: "flex",
            }}
          >
            <div
              className="Submit"
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "Spline Sans Mono",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
