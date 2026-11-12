import type { CSSProperties } from "react";
import { Reveal } from "@/components/case-study/case-study";
import "./fadarhy-ui-kit.css";

/** Component specimens from the supplied FadäRhy UI kit. */
export function FadarhyUiKit() {
  return (
    <Reveal>
      <figure>
        <div
          className="fadarhy-ui-kit"
          style={
            {
              "--font-sans": '"Neue Frutiger", "Helvetica Neue", Helvetica, Arial, sans-serif',
              "--font-mono": '"JetBrains Mono", ui-monospace, Menlo, monospace',
              "--thread-lime": "#d6ff3f",
              "--night": "#2a2a2a",
              "--mist": "#eef0e8",
              "--surface": "#ffffff",
              "--section": "#f4f6fb",
              "--line": "#e4e4ea",
              "--line-strong": "#6b6b76",
              "--ink": "#2a2a2a",
              "--ink-muted": "#5c5c66",
              "--rhine-blue": "#2446f5",
              "--rhine-blue-soft": "#dce4fe",
              "--link": "#2446f5",
            } as CSSProperties
          }
        >
          <div className="kit-grid">
            <div>
              <section
                aria-label="Buttons"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Buttons"}
                </h2>
                <p
                  style={
                    {
                      margin: "0 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Primary"}
                </p>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(72px, max-content))",
                      gap: "10px 10px",
                      alignItems: "center",
                    } as CSSProperties
                  }
                >
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Default"}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Hover"}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Pressed"}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Disabled"}
                  </span>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "0",
                        background: "#2446f5",
                        color: "#ffffff",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "0",
                        background: "#1e3edb",
                        color: "#ffffff",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "0",
                        background: "#1935be",
                        color: "#ffffff",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                  <button
                    type="button"
                    disabled
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "0",
                        background: "#d8dfff",
                        color: "#6f7696",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Primary with icon · pill"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "0",
                        background: "#2446f5",
                        color: "#ffffff",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M21 3 10 14"></path>
                      <path d="M21 3l-7 18-4-7-7-4z"></path>
                    </svg>
                    {"Open in mail client"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        border: "0",
                        background: "#2446f5",
                        color: "#ffffff",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                  <button
                    type="button"
                    disabled
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        border: "0",
                        background: "#d8dfff",
                        color: "#6f7696",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Secondary"}
                </p>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(72px, max-content))",
                      gap: "10px 10px",
                      alignItems: "center",
                    } as CSSProperties
                  }
                >
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Default"}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Hover"}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Pressed"}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Disabled"}
                  </span>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "1px solid var(--line)",
                        background: "var(--surface)",
                        color: "var(--ink)",
                      } as CSSProperties
                    }
                  >
                    {"Edit"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "1px solid var(--line)",
                        background: "var(--section)",
                        color: "var(--ink)",
                      } as CSSProperties
                    }
                  >
                    {"Edit"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "1px solid var(--line-strong)",
                        background: "var(--section)",
                        color: "var(--ink)",
                      } as CSSProperties
                    }
                  >
                    {"Edit"}
                  </button>
                  <button
                    type="button"
                    disabled
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "1px solid var(--line)",
                        background: "var(--surface)",
                        color: "#a3a8b4",
                      } as CSSProperties
                    }
                  >
                    {"Edit"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Secondary with icon"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "1px solid var(--line)",
                        background: "var(--surface)",
                        color: "var(--ink)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="9" y="9" width="11" height="11" rx="2"></rect>
                      <path d="M5 15V5a1 1 0 0 1 1-1h9"></path>
                    </svg>
                    {"Copy"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "44px",
                        padding: "0 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "500",
                        border: "1px solid var(--line)",
                        background: "var(--surface)",
                        color: "var(--ink)",
                      } as CSSProperties
                    }
                  >
                    {"Edit description"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Icon buttons"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-label="Start over"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        border: "0",
                        background: "transparent",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.6"></path>
                      <path d="M4 4v4.6h4.6"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Switch theme"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        border: "0",
                        background: "var(--section)",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Speak"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        border: "0",
                        background: "transparent",
                        color: "var(--ink)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Close"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        border: "0",
                        background: "transparent",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M7 7l10 10M17 7 7 17"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Edit profile"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        border: "0",
                        background: "transparent",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M4 20h4L19 9l-4-4L4 16z"></path>
                    </svg>
                  </button>
                </div>
              </section>
            </div>
            <div>
              <section
                aria-label="Inputs"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Inputs"}
                </h2>
                <div
                  style={
                    {
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                      gap: "16px 12px",
                    } as CSSProperties
                  }
                >
                  <div
                    style={
                      { display: "flex", flexDirection: "column", gap: "6px" } as CSSProperties
                    }
                  >
                    <span
                      style={
                        { fontSize: "13px", lineHeight: "16px", fontWeight: "500" } as CSSProperties
                      }
                    >
                      {"Company name (optional)"}
                    </span>
                    <div style={{ position: "relative" } as CSSProperties}>
                      <div
                        style={
                          {
                            boxSizing: "border-box",
                            height: "40px",
                            padding: "0 14px 0 14px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            border: "1px solid var(--line)",
                            background: "var(--surface)",
                          } as CSSProperties
                        }
                      >
                        <span style={{ color: "var(--ink-muted)" } as CSSProperties}>
                          {"e.g. Helix Bio"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      { display: "flex", flexDirection: "column", gap: "6px" } as CSSProperties
                    }
                  >
                    <span
                      style={
                        { fontSize: "13px", lineHeight: "16px", fontWeight: "500" } as CSSProperties
                      }
                    >
                      {"Team size"}
                    </span>
                    <div style={{ position: "relative" } as CSSProperties}>
                      <div
                        style={
                          {
                            boxSizing: "border-box",
                            height: "40px",
                            padding: "0 14px 0 14px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            border: "1px solid var(--line)",
                            background: "var(--surface)",
                          } as CSSProperties
                        }
                      >
                        {"4"}
                      </div>
                    </div>
                  </div>
                  <div
                    style={
                      { display: "flex", flexDirection: "column", gap: "6px" } as CSSProperties
                    }
                  >
                    <span
                      style={
                        { fontSize: "13px", lineHeight: "16px", fontWeight: "500" } as CSSProperties
                      }
                    >
                      {"Stage"}
                    </span>
                    <div style={{ position: "relative" } as CSSProperties}>
                      <div
                        style={
                          {
                            boxSizing: "border-box",
                            height: "40px",
                            padding: "0 36px 0 14px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            border: "1px solid var(--line)",
                            background: "var(--surface)",
                          } as CSSProperties
                        }
                      >
                        {"Seed"}
                      </div>
                      <span
                        style={
                          {
                            position: "absolute",
                            right: "12px",
                            top: "12px",
                            color: "var(--ink-muted)",
                          } as CSSProperties
                        }
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style={
                            {
                              flex: "0 0 auto",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            } as CSSProperties
                          }
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      { display: "flex", flexDirection: "column", gap: "6px" } as CSSProperties
                    }
                  >
                    <span
                      style={
                        { fontSize: "13px", lineHeight: "16px", fontWeight: "500" } as CSSProperties
                      }
                    >
                      {"Where to look"}
                    </span>
                    <div style={{ position: "relative" } as CSSProperties}>
                      <div
                        style={
                          {
                            boxSizing: "border-box",
                            height: "40px",
                            padding: "0 36px 0 14px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            border: "1.5px solid var(--rhine-blue)",
                            boxShadow: "0 0 0 3px var(--rhine-blue-soft)",
                            background: "var(--surface)",
                          } as CSSProperties
                        }
                      >
                        {"Basel region"}
                      </div>
                      <span
                        style={
                          {
                            position: "absolute",
                            right: "12px",
                            top: "12px",
                            color: "var(--ink-muted)",
                          } as CSSProperties
                        }
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style={
                            {
                              flex: "0 0 auto",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            } as CSSProperties
                          }
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      { display: "flex", flexDirection: "column", gap: "6px" } as CSSProperties
                    }
                  >
                    <span
                      style={
                        { fontSize: "13px", lineHeight: "16px", fontWeight: "500" } as CSSProperties
                      }
                    >
                      {"Field"}
                    </span>
                    <div style={{ position: "relative" } as CSSProperties}>
                      <div
                        style={
                          {
                            boxSizing: "border-box",
                            height: "40px",
                            padding: "0 36px 0 14px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            border: "1px solid var(--line)",
                            background: "var(--section)",
                            color: "#8a8f99",
                          } as CSSProperties
                        }
                      >
                        {"Medical devices"}
                      </div>
                      <span
                        style={
                          {
                            position: "absolute",
                            right: "12px",
                            top: "12px",
                            color: "var(--ink-muted)",
                          } as CSSProperties
                        }
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          style={
                            {
                              flex: "0 0 auto",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            } as CSSProperties
                          }
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    style={
                      { display: "flex", flexDirection: "column", gap: "6px" } as CSSProperties
                    }
                  >
                    <span
                      style={
                        { fontSize: "13px", lineHeight: "16px", fontWeight: "500" } as CSSProperties
                      }
                    >
                      {"Team size"}
                    </span>
                    <div style={{ position: "relative" } as CSSProperties}>
                      <div
                        style={
                          {
                            boxSizing: "border-box",
                            height: "40px",
                            padding: "0 14px 0 14px",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            border: "1px solid #b42318",
                            background: "var(--surface)",
                          } as CSSProperties
                        }
                      >
                        <span style={{ color: "var(--ink-muted)" } as CSSProperties}>
                          {"Number of people"}
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: "12px", color: "#b42318" } as CSSProperties}>
                      {"Enter your team size"}
                    </span>
                  </div>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Refine field"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      height: "44px",
                      padding: "0 6px 0 14px",
                      border: "1px solid var(--line)",
                      borderRadius: "999px",
                      background: "var(--surface)",
                    } as CSSProperties
                  }
                >
                  <span style={{ color: "var(--link)" } as CSSProperties}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"></path>
                    </svg>
                  </span>
                  <span
                    style={
                      {
                        flex: "1 1 auto",
                        fontSize: "13px",
                        color: "var(--ink-muted)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      } as CSSProperties
                    }
                  >
                    {"Refine in plain words, e.g. only investors who lead rounds"}
                  </span>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        border: "0",
                        background: "#2446f5",
                        color: "#ffffff",
                      } as CSSProperties
                    }
                  >
                    {"Update"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Message"}
                </p>
                <div
                  style={
                    {
                      boxSizing: "border-box",
                      padding: "12px 14px",
                      border: "1px solid var(--line)",
                      borderRadius: "10px",
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "var(--ink)",
                    } as CSSProperties
                  }
                >
                  {"Dear Switzerland Innovation Park Basel Area team,"}
                  <br />
                  {
                    "I am writing on behalf of our team, a 4-person medical devices team at seed stage…"
                  }
                </div>
              </section>
            </div>
            <div>
              <section
                aria-label="Filter chips"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Filter chips"}
                </h2>
                <p
                  style={
                    {
                      margin: "0 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Category filters with counts"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-pressed="true"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "34px",
                        padding: "0 12px",
                        borderRadius: "999px",
                        color: "#fff",
                        fontSize: "13px",
                        backgroundColor: "var(--btn-primary-bg-active, #1935be)",
                        borderStyle: "none",
                      } as CSSProperties
                    }
                  >
                    {"All"}
                    <span
                      style={
                        { font: "500 11px/1 var(--font-mono)", opacity: ".7" } as CSSProperties
                      }
                    >
                      {"931"}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "34px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "8px",
                          height: "8px",
                          borderRadius: "2px",
                          background: "#0f8a74",
                        } as CSSProperties
                      }
                    ></span>
                    {"Lab space"}
                    <span
                      style={
                        {
                          font: "500 11px/1 var(--font-mono)",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"61"}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "34px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "8px",
                          height: "8px",
                          borderRadius: "2px",
                          background: "#b45309",
                        } as CSSProperties
                      }
                    ></span>
                    {"Investor"}
                    <span
                      style={
                        {
                          font: "500 11px/1 var(--font-mono)",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"168"}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "34px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "8px",
                          height: "8px",
                          borderRadius: "2px",
                          background: "#5b4bd6",
                        } as CSSProperties
                      }
                    ></span>
                    {"Pharma"}
                    <span
                      style={
                        {
                          font: "500 11px/1 var(--font-mono)",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"508"}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "34px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "8px",
                          height: "8px",
                          borderRadius: "2px",
                          background: "#2446f5",
                        } as CSSProperties
                      }
                    ></span>
                    {"Funding programme"}
                    <span
                      style={
                        {
                          font: "500 11px/1 var(--font-mono)",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"15"}
                    </span>
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Suggestions"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px",
                    } as CSSProperties
                  }
                >
                  <span style={{ fontSize: "12px", color: "var(--ink-muted)" } as CSSProperties}>
                    {"Try"}
                  </span>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    {"Only investors who lead rounds"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    {"We need BSL-3"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    {"Add grants"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    {"Answer in German"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Filter menus"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "8px",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "36px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    {"All types"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "36px",
                        padding: "0 12px",
                        border: "1px solid var(--line)",
                        borderRadius: "999px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    {"All regions"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Tags"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "6px",
                    } as CSSProperties
                  }
                >
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "999px",
                        background: "var(--section)",
                        color: "var(--ink)",
                        fontSize: "11px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "6px",
                          height: "6px",
                          borderRadius: "3px",
                          background: "#0f8a74",
                        } as CSSProperties
                      }
                    ></span>
                    {"Lab space"}
                  </span>
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "999px",
                        background: "var(--section)",
                        color: "var(--ink)",
                        fontSize: "11px",
                      } as CSSProperties
                    }
                  >
                    {"Basel-Landschaft"}
                  </span>
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "999px",
                        background: "var(--section)",
                        color: "var(--ink)",
                        fontSize: "11px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "6px",
                          height: "6px",
                          borderRadius: "3px",
                          background: "#2446f5",
                        } as CSSProperties
                      }
                    ></span>
                    {"Grants"}
                  </span>
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "999px",
                        background: "var(--section)",
                        color: "var(--ink)",
                        fontSize: "11px",
                      } as CSSProperties
                    }
                  >
                    {"Basel-Stadt"}
                  </span>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Add a need"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "6px",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 10px",
                        border: "1px dashed #c9ccd3",
                        borderRadius: "8px",
                        background: "var(--surface)",
                        color: "var(--ink-muted)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    {"Investors"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 10px",
                        border: "1px dashed #c9ccd3",
                        borderRadius: "8px",
                        background: "var(--surface)",
                        color: "var(--ink-muted)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    {"Regulatory"}
                  </button>
                  <button
                    type="button"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 10px",
                        border: "1px dashed #c9ccd3",
                        borderRadius: "8px",
                        background: "var(--surface)",
                        color: "var(--ink-muted)",
                        fontSize: "12px",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    {"Mentoring"}
                  </button>
                </div>
              </section>
            </div>
            <div>
              <section
                aria-label="Segmented controls"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Segmented controls"}
                </h2>
                <p
                  style={
                    {
                      margin: "0 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Result views"}
                </p>
                <div
                  role="group"
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "4px",
                      border: "1px solid var(--line)",
                      borderRadius: "999px",
                      background: "var(--surface)",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-pressed="true"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        background: "var(--rhine-blue)",
                        color: "#fff",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="4" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                    </svg>
                    {"Matches"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        background: "transparent",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="4" y="5" width="16" height="15" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M4 10h16"></path>
                    </svg>
                    {"Plan"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        background: "transparent",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    {"Map"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "500",
                        background: "transparent",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                      <path d="M8 20h8M12 16v4"></path>
                    </svg>
                    {"Graph"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Answer language"}
                </p>
                <div
                  role="group"
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "3px",
                      borderRadius: "13px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"Auto"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"English"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="true"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    {"Deutsch"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"Français"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Profile type"}
                </p>
                <div
                  role="group"
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "3px",
                      borderRadius: "13px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-pressed="true"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    {"Startup or company"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"Service provider"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Interface language"}
                </p>
                <div
                  role="group"
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "3px",
                      borderRadius: "17px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "14px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"EN"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="true"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "14px",
                        fontSize: "13px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    {"DE"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "14px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"FR"}
                  </button>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Directory view"}
                </p>
                <div
                  role="group"
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "3px",
                      borderRadius: "13px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <button
                    type="button"
                    aria-pressed="true"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    {"List"}
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "30px",
                        padding: "0 12px",
                        border: "0",
                        borderRadius: "10px",
                        fontSize: "13px",
                        background: "transparent",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"Grid"}
                  </button>
                </div>
              </section>
            </div>
            <div>
              <section
                aria-label="Pill navigation"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Pill navigation"}
                </h2>
                <p
                  style={
                    {
                      margin: "0 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Results active"}
                </p>
                <nav
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "4px",
                      borderRadius: "999px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <a
                    aria-current="page"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="4" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                    </svg>
                    {"Results"}
                  </a>
                  <a
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"></path>
                      <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"></path>
                    </svg>
                    {"Directory"}
                  </a>
                  <a
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M6 3h12v18l-6-4-6 4z"></path>
                    </svg>
                    {"Shortlist"}
                  </a>
                </nav>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Directory active"}
                </p>
                <nav
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "4px",
                      borderRadius: "999px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <a
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="4" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                    </svg>
                    {"Results"}
                  </a>
                  <a
                    aria-current="page"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"></path>
                      <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"></path>
                    </svg>
                    {"Directory"}
                  </a>
                  <a
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M6 3h12v18l-6-4-6 4z"></path>
                    </svg>
                    {"Shortlist"}
                  </a>
                </nav>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Shortlist active"}
                </p>
                <nav
                  style={
                    {
                      display: "inline-flex",
                      gap: "2px",
                      padding: "4px",
                      borderRadius: "999px",
                      background: "var(--section)",
                    } as CSSProperties
                  }
                >
                  <a
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <rect x="4" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"></rect>
                    </svg>
                    {"Results"}
                  </a>
                  <a
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "var(--ink-muted)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"></path>
                      <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"></path>
                    </svg>
                    {"Directory"}
                  </a>
                  <a
                    aria-current="page"
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "-0.2px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        height: "32px",
                        padding: "0 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        textDecoration: "none",
                        background: "var(--surface)",
                        color: "var(--ink)",
                        fontWeight: "600",
                        boxShadow: "0 1px 2px rgba(16,24,40,.1)",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M6 3h12v18l-6-4-6 4z"></path>
                    </svg>
                    {"Shortlist"}
                  </a>
                </nav>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Sidebar shortcut"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      height: "40px",
                      padding: "0 12px",
                      borderRadius: "10px",
                      background: "var(--section)",
                      maxWidth: "260px",
                    } as CSSProperties
                  }
                >
                  <span style={{ color: "var(--link)" } as CSSProperties}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M6 3h12v18l-6-4-6 4z"></path>
                    </svg>
                  </span>
                  <span style={{ flex: "1 1 auto", fontSize: "13px" } as CSSProperties}>
                    {"Shortlist"}
                  </span>
                  <span
                    style={
                      {
                        minWidth: "20px",
                        height: "20px",
                        padding: "0 6px",
                        boxSizing: "border-box",
                        borderRadius: "10px",
                        background: "var(--rhine-blue)",
                        color: "#fff",
                        font: "600 11px/20px var(--font-sans)",
                        textAlign: "center",
                      } as CSSProperties
                    }
                  >
                    {"0"}
                  </span>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Needs list"}
                </p>
                <div
                  style={
                    {
                      maxWidth: "260px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    } as CSSProperties
                  }
                >
                  <div
                    style={
                      {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "7px",
                          height: "7px",
                          borderRadius: "4px",
                          background: "#0f8a74",
                        } as CSSProperties
                      }
                    ></span>
                    <span style={{ flex: "1 1 auto" } as CSSProperties}>{"Lab space"}</span>
                    <span style={{ color: "var(--ink-muted)" } as CSSProperties}>{"4"}</span>
                  </div>
                  <div
                    style={
                      {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "7px",
                          height: "7px",
                          borderRadius: "4px",
                          background: "#2446f5",
                        } as CSSProperties
                      }
                    ></span>
                    <span style={{ flex: "1 1 auto" } as CSSProperties}>{"Grants"}</span>
                    <span style={{ color: "var(--ink-muted)" } as CSSProperties}>{"4"}</span>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section
                aria-label="Controls"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Controls"}
                </h2>
                <p
                  style={
                    {
                      margin: "0 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Approval checkbox"}
                </p>
                <label
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "var(--section)",
                      fontSize: "13px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  <span
                    aria-hidden="true"
                    style={
                      {
                        width: "18px",
                        height: "18px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                        flex: "0 0 auto",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1.5px solid var(--line-strong)",
                        background: "var(--surface)",
                      } as CSSProperties
                    }
                  ></span>
                  {"I have read this draft and approve contacting this organisation."}
                </label>
                <div style={{ height: "8px" } as CSSProperties}></div>
                <label
                  style={
                    {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "var(--section)",
                      fontSize: "13px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  <span
                    aria-hidden="true"
                    style={
                      {
                        width: "18px",
                        height: "18px",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                        flex: "0 0 auto",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--rhine-blue)",
                        color: "#fff",
                      } as CSSProperties
                    }
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={
                        {
                          flex: "0 0 auto",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "3.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        } as CSSProperties
                      }
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                    </svg>
                  </span>
                  {"I have read this draft and approve contacting this organisation."}
                </label>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Range slider"}
                </p>
                <div
                  style={
                    {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      height: "36px",
                      padding: "0 14px",
                      border: "1px solid var(--line)",
                      borderRadius: "999px",
                      background: "var(--surface)",
                      fontSize: "13px",
                    } as CSSProperties
                  }
                >
                  {"Minimum match "}
                  <b style={{ fontWeight: "600" } as CSSProperties}>{"40"}</b>
                  <span
                    style={
                      {
                        position: "relative",
                        width: "70px",
                        height: "4px",
                        borderRadius: "2px",
                        background: "var(--line)",
                      } as CSSProperties
                    }
                  >
                    <span
                      style={
                        {
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "40%",
                          height: "4px",
                          borderRadius: "2px",
                          background: "var(--rhine-blue)",
                        } as CSSProperties
                      }
                    ></span>
                    <span
                      style={
                        {
                          position: "absolute",
                          left: "calc(40% - 7px)",
                          top: "-5px",
                          width: "14px",
                          height: "14px",
                          borderRadius: "7px",
                          background: "var(--rhine-blue)",
                          boxShadow: "0 0 0 2px #fff",
                        } as CSSProperties
                      }
                    ></span>
                  </span>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Match score"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "14px",
                    } as CSSProperties
                  }
                >
                  <span
                    role="img"
                    aria-label="Match score 71"
                    style={
                      {
                        position: "relative",
                        display: "inline-flex",
                        width: "44px",
                        height: "44px",
                      } as CSSProperties
                    }
                  >
                    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
                      <circle
                        cx="22"
                        cy="22"
                        r="17"
                        fill="none"
                        stroke="var(--rhine-blue-soft)"
                        strokeWidth="3.5"
                      ></circle>
                      <circle
                        cx="22"
                        cy="22"
                        r="17"
                        fill="none"
                        stroke="var(--rhine-blue)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="75.8 106.8"
                        transform="rotate(-90 22 22)"
                      ></circle>
                    </svg>
                    <span
                      style={
                        {
                          position: "absolute",
                          inset: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          fontWeight: "600",
                        } as CSSProperties
                      }
                    >
                      {"71"}
                    </span>
                  </span>
                  <span
                    role="img"
                    aria-label="Match score 65"
                    style={
                      {
                        position: "relative",
                        display: "inline-flex",
                        width: "44px",
                        height: "44px",
                      } as CSSProperties
                    }
                  >
                    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
                      <circle
                        cx="22"
                        cy="22"
                        r="17"
                        fill="none"
                        stroke="var(--rhine-blue-soft)"
                        strokeWidth="3.5"
                      ></circle>
                      <circle
                        cx="22"
                        cy="22"
                        r="17"
                        fill="none"
                        stroke="var(--rhine-blue)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="69.4 106.8"
                        transform="rotate(-90 22 22)"
                      ></circle>
                    </svg>
                    <span
                      style={
                        {
                          position: "absolute",
                          inset: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          fontWeight: "600",
                        } as CSSProperties
                      }
                    >
                      {"65"}
                    </span>
                  </span>
                  <span
                    role="img"
                    aria-label="Match score 42"
                    style={
                      {
                        position: "relative",
                        display: "inline-flex",
                        width: "44px",
                        height: "44px",
                      } as CSSProperties
                    }
                  >
                    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
                      <circle
                        cx="22"
                        cy="22"
                        r="17"
                        fill="none"
                        stroke="var(--rhine-blue-soft)"
                        strokeWidth="3.5"
                      ></circle>
                      <circle
                        cx="22"
                        cy="22"
                        r="17"
                        fill="none"
                        stroke="var(--rhine-blue)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="44.9 106.8"
                        transform="rotate(-90 22 22)"
                      ></circle>
                    </svg>
                    <span
                      style={
                        {
                          position: "absolute",
                          inset: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          fontWeight: "600",
                        } as CSSProperties
                      }
                    >
                      {"42"}
                    </span>
                  </span>
                </div>
                <p
                  style={
                    {
                      margin: "22px 0 10px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Status"}
                </p>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "12px",
                    } as CSSProperties
                  }
                >
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                      } as CSSProperties
                    }
                  >
                    <span
                      aria-hidden="true"
                      style={
                        {
                          width: "8px",
                          height: "8px",
                          borderRadius: "4px",
                          background: "#0f8a74",
                        } as CSSProperties
                      }
                    ></span>
                    {"planned"}
                  </span>
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "999px",
                        border: "1px solid var(--line)",
                        fontSize: "11px",
                        color: "var(--ink-muted)",
                      } as CSSProperties
                    }
                  >
                    {"Completed"}
                  </span>
                  <span
                    style={
                      {
                        display: "inline-flex",
                        alignItems: "center",
                        height: "22px",
                        padding: "0 8px",
                        borderRadius: "999px",
                        background: "var(--rhine-blue-soft)",
                        fontSize: "11px",
                        color: "var(--link)",
                        fontWeight: "500",
                      } as CSSProperties
                    }
                  >
                    {"Active"}
                  </span>
                </div>
              </section>
            </div>
            <div className="kit-wide">
              <section
                aria-label="Reusable actions"
                style={
                  {
                    boxSizing: "border-box",
                    height: "100%",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
                    padding: "28px",
                  } as CSSProperties
                }
              >
                <h2
                  style={
                    {
                      margin: "0 0 24px",
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                    } as CSSProperties
                  }
                >
                  {"Reusable actions"}
                </h2>
                <div
                  style={
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "28px",
                      alignItems: "flex-start",
                    } as CSSProperties
                  }
                >
                  <div style={{ flex: "0 1 300px", minWidth: "0" } as CSSProperties}>
                    <p
                      style={
                        {
                          margin: "0 0 10px",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"Match card actions"}
                    </p>
                    <article
                      style={
                        {
                          boxSizing: "border-box",
                          width: "100%",
                          maxWidth: "300px",
                          padding: "20px",
                          border: "1px solid var(--line)",
                          borderRadius: "14px",
                          background: "var(--surface)",
                        } as CSSProperties
                      }
                    >
                      <div
                        style={
                          {
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "10px",
                          } as CSSProperties
                        }
                      >
                        <div
                          style={{ display: "flex", flexWrap: "wrap", gap: "6px" } as CSSProperties}
                        >
                          <span
                            style={
                              {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                height: "22px",
                                padding: "0 8px",
                                borderRadius: "999px",
                                background: "var(--section)",
                                color: "var(--ink)",
                                fontSize: "11px",
                              } as CSSProperties
                            }
                          >
                            <span
                              aria-hidden="true"
                              style={
                                {
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "3px",
                                  background: "#0f8a74",
                                } as CSSProperties
                              }
                            ></span>
                            {"Lab space"}
                          </span>
                          <span
                            style={
                              {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                height: "22px",
                                padding: "0 8px",
                                borderRadius: "999px",
                                background: "var(--section)",
                                color: "var(--ink)",
                                fontSize: "11px",
                              } as CSSProperties
                            }
                          >
                            {"Basel-Stadt"}
                          </span>
                        </div>
                        <span
                          role="img"
                          aria-label="Match score 71"
                          style={
                            {
                              position: "relative",
                              display: "inline-flex",
                              width: "44px",
                              height: "44px",
                            } as CSSProperties
                          }
                        >
                          <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
                            <circle
                              cx="22"
                              cy="22"
                              r="17"
                              fill="none"
                              stroke="var(--rhine-blue-soft)"
                              strokeWidth="3.5"
                            ></circle>
                            <circle
                              cx="22"
                              cy="22"
                              r="17"
                              fill="none"
                              stroke="var(--rhine-blue)"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeDasharray="75.8 106.8"
                              transform="rotate(-90 22 22)"
                            ></circle>
                          </svg>
                          <span
                            style={
                              {
                                position: "absolute",
                                inset: "0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "13px",
                                fontWeight: "600",
                              } as CSSProperties
                            }
                          >
                            {"71"}
                          </span>
                        </span>
                      </div>
                      <h3
                        style={
                          {
                            margin: "10px 0 0",
                            fontSize: "15px",
                            lineHeight: "20px",
                            fontWeight: "600",
                          } as CSSProperties
                        }
                      >
                        {"Tech Park Basel"}
                      </h3>
                      <p
                        style={
                          {
                            margin: "6px 0 0",
                            fontSize: "13px",
                            color: "var(--ink)",
                          } as CSSProperties
                        }
                      >
                        {"Fits seed stage."}
                      </p>
                      <p
                        style={
                          {
                            margin: "8px 0 0",
                            fontSize: "11px",
                            lineHeight: "16px",
                            color: "var(--ink-muted)",
                          } as CSSProperties
                        }
                      >
                        {"Source: Basel Super Cluster · verified Oct 2026"}
                      </p>
                      <p
                        style={
                          {
                            margin: "10px 0 0",
                            fontSize: "12px",
                            fontWeight: "600",
                          } as CSSProperties
                        }
                      >
                        {"▸ Why this match"}
                      </p>
                      <div
                        style={
                          {
                            marginTop: "16px",
                            paddingTop: "12px",
                            borderTop: "1px solid var(--line)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          } as CSSProperties
                        }
                      >
                        <button
                          type="button"
                          style={
                            {
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              whiteSpace: "nowrap",
                              fontFamily: "var(--font-sans)",
                              letterSpacing: "-0.2px",
                              cursor: "pointer",
                              boxSizing: "border-box",
                              height: "30px",
                              padding: "0 10px",
                              borderRadius: "8px",
                              fontSize: "12px",
                              fontWeight: "500",
                              border: "1px solid var(--line)",
                              background: "var(--surface)",
                              color: "var(--ink)",
                            } as CSSProperties
                          }
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={
                              {
                                flex: "0 0 auto",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              } as CSSProperties
                            }
                          >
                            <path d="M6 3h12v18l-6-4-6 4z"></path>
                          </svg>
                          {"Save"}
                        </button>
                        <button
                          type="button"
                          style={
                            {
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              whiteSpace: "nowrap",
                              fontFamily: "var(--font-sans)",
                              letterSpacing: "-0.2px",
                              cursor: "pointer",
                              boxSizing: "border-box",
                              height: "30px",
                              padding: "0 10px",
                              borderRadius: "8px",
                              fontSize: "12px",
                              fontWeight: "500",
                              border: "1px solid var(--line)",
                              background: "var(--surface)",
                              color: "var(--ink)",
                            } as CSSProperties
                          }
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={
                              {
                                flex: "0 0 auto",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              } as CSSProperties
                            }
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <path d="m3 7 9 6 9-6"></path>
                          </svg>
                          {"Draft intro"}
                        </button>
                        <span style={{ marginLeft: "auto" } as CSSProperties}>
                          <button
                            type="button"
                            style={
                              {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                whiteSpace: "nowrap",
                                fontFamily: "var(--font-sans)",
                                letterSpacing: "-0.2px",
                                cursor: "pointer",
                                boxSizing: "border-box",
                                height: "30px",
                                padding: "0 8px",
                                border: "0",
                                borderRadius: "8px",
                                background: "transparent",
                                color: "var(--ink)",
                                fontSize: "12px",
                                fontWeight: "500",
                              } as CSSProperties
                            }
                          >
                            {"Details"}
                          </button>
                        </span>
                      </div>
                    </article>
                  </div>
                  <div
                    style={
                      {
                        display: "flex",
                        flexDirection: "column",
                        gap: "0",
                        flex: "1 1 320px",
                        minWidth: "0",
                        maxWidth: "420px",
                      } as CSSProperties
                    }
                  >
                    <p
                      style={
                        {
                          margin: "0 0 10px",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"Directory row"}
                    </p>
                    <div
                      style={
                        {
                          boxSizing: "border-box",
                          width: "100%",
                          maxWidth: "420px",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 14px",
                          border: "1px solid var(--line)",
                          borderRadius: "12px",
                          background: "var(--surface)",
                        } as CSSProperties
                      }
                    >
                      <span
                        aria-hidden="true"
                        style={
                          {
                            width: "34px",
                            height: "34px",
                            borderRadius: "8px",
                            background: "var(--rhine-blue-soft)",
                            color: "var(--link)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: "600",
                          } as CSSProperties
                        }
                      >
                        {"4C"}
                      </span>
                      <div style={{ flex: "1 1 auto", minWidth: "0" } as CSSProperties}>
                        <p
                          style={
                            { margin: "0", fontSize: "14px", fontWeight: "600" } as CSSProperties
                          }
                        >
                          {"4G Clinical B.V., Basel branch"}
                        </p>
                        <p
                          style={
                            {
                              margin: "2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              fontSize: "12px",
                              color: "var(--ink-muted)",
                            } as CSSProperties
                          }
                        >
                          <span
                            aria-hidden="true"
                            style={
                              {
                                width: "7px",
                                height: "7px",
                                borderRadius: "2px",
                                background: "#5b4bd6",
                              } as CSSProperties
                            }
                          ></span>
                          {"Pharma · Basel-Stadt"}
                        </p>
                      </div>
                      <button
                        type="button"
                        style={
                          {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            whiteSpace: "nowrap",
                            fontFamily: "var(--font-sans)",
                            letterSpacing: "-0.2px",
                            cursor: "pointer",
                            boxSizing: "border-box",
                            height: "30px",
                            padding: "0 10px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "500",
                            border: "1px solid var(--line)",
                            background: "var(--surface)",
                            color: "var(--ink)",
                          } as CSSProperties
                        }
                      >
                        {"Save"}
                      </button>
                    </div>
                    <p
                      style={
                        {
                          margin: "22px 0 10px",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"Programme row"}
                    </p>
                    <div
                      style={
                        {
                          boxSizing: "border-box",
                          width: "100%",
                          maxWidth: "420px",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 14px",
                          border: "1px solid var(--line)",
                          borderRadius: "12px",
                          background: "var(--surface)",
                        } as CSSProperties
                      }
                    >
                      <span
                        aria-hidden="true"
                        style={
                          {
                            width: "34px",
                            height: "34px",
                            borderRadius: "8px",
                            background: "var(--rhine-blue-soft)",
                            color: "var(--link)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: "600",
                          } as CSSProperties
                        }
                      >
                        {"B"}
                      </span>
                      <div style={{ flex: "1 1 auto", minWidth: "0" } as CSSProperties}>
                        <p
                          style={
                            { margin: "0", fontSize: "14px", fontWeight: "600" } as CSSProperties
                          }
                        >
                          {"BaseLaunch"}
                        </p>
                        <p
                          style={
                            {
                              margin: "2px 0 0",
                              fontSize: "12px",
                              color: "var(--ink-muted)",
                            } as CSSProperties
                          }
                        >
                          {"Support programme that can arrange lab access"}
                        </p>
                      </div>
                      <span
                        style={
                          {
                            font: "500 12px/1 var(--font-mono)",
                            color: "var(--ink-muted)",
                          } as CSSProperties
                        }
                      >
                        {"65"}
                      </span>
                      <button
                        type="button"
                        style={
                          {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            whiteSpace: "nowrap",
                            fontFamily: "var(--font-sans)",
                            letterSpacing: "-0.2px",
                            cursor: "pointer",
                            boxSizing: "border-box",
                            height: "30px",
                            padding: "0 10px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "500",
                            border: "1px solid var(--line)",
                            background: "var(--surface)",
                            color: "var(--ink)",
                          } as CSSProperties
                        }
                      >
                        {"Details"}
                      </button>
                    </div>
                  </div>
                  <div
                    style={{ flex: "1 1 320px", minWidth: "0", maxWidth: "420px" } as CSSProperties}
                  >
                    <p
                      style={
                        {
                          margin: "0 0 10px",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "var(--ink-muted)",
                        } as CSSProperties
                      }
                    >
                      {"Draft intro footer"}
                    </p>
                    <div
                      style={
                        {
                          boxSizing: "border-box",
                          width: "100%",
                          maxWidth: "420px",
                          padding: "18px",
                          border: "1px solid var(--line)",
                          borderRadius: "14px",
                          background: "var(--surface)",
                        } as CSSProperties
                      }
                    >
                      <label
                        style={
                          {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            background: "var(--section)",
                            fontSize: "13px",
                            color: "var(--ink-muted)",
                          } as CSSProperties
                        }
                      >
                        <span
                          aria-hidden="true"
                          style={
                            {
                              width: "18px",
                              height: "18px",
                              boxSizing: "border-box",
                              borderRadius: "5px",
                              flex: "0 0 auto",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "1.5px solid var(--line-strong)",
                              background: "var(--surface)",
                            } as CSSProperties
                          }
                        ></span>
                        {"I have read this draft and approve contacting this organisation."}
                      </label>
                      <div
                        style={{ marginTop: "14px", display: "flex", gap: "10px" } as CSSProperties}
                      >
                        <button
                          type="button"
                          style={
                            {
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              whiteSpace: "nowrap",
                              fontFamily: "var(--font-sans)",
                              letterSpacing: "-0.2px",
                              cursor: "pointer",
                              boxSizing: "border-box",
                              height: "44px",
                              padding: "0 18px",
                              borderRadius: "12px",
                              fontSize: "15px",
                              fontWeight: "500",
                              border: "1px solid var(--line)",
                              background: "var(--surface)",
                              color: "var(--ink)",
                            } as CSSProperties
                          }
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={
                              {
                                flex: "0 0 auto",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              } as CSSProperties
                            }
                          >
                            <rect x="9" y="9" width="11" height="11" rx="2"></rect>
                            <path d="M5 15V5a1 1 0 0 1 1-1h9"></path>
                          </svg>
                          {"Copy"}
                        </button>
                        <button
                          type="button"
                          style={
                            {
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              whiteSpace: "nowrap",
                              fontFamily: "var(--font-sans)",
                              letterSpacing: "-0.2px",
                              cursor: "pointer",
                              boxSizing: "border-box",
                              height: "44px",
                              padding: "0 18px",
                              borderRadius: "12px",
                              fontSize: "15px",
                              fontWeight: "500",
                              border: "0",
                              background: "#2446f5",
                              color: "#ffffff",
                            } as CSSProperties
                          }
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={
                              {
                                flex: "0 0 auto",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              } as CSSProperties
                            }
                          >
                            <path d="M21 3 10 14"></path>
                            <path d="M21 3l-7 18-4-7-7-4z"></path>
                          </svg>
                          {"Open in mail client"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <figcaption className="mt-4 text-[13px] text-muted-foreground">
          Component specimens from the FadäRhy UI kit: states, controls, navigation and reusable
          actions across the journey and directory.
        </figcaption>
      </figure>
    </Reveal>
  );
}
