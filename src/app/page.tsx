import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "52rem",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        lineHeight: 1.6,
        color: "#111",
      }}
    >
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>Scrolly</h1>
      <p style={{ fontSize: "1.125rem", color: "#555", marginTop: 0 }}>
        A teaching site about <strong>scrollytelling</strong> on the web, built
        with a spec-driven + phased AI workflow.
      </p>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.25rem" }}>Start here</h2>
        <ul>
          <li>
            <Link href="/images/">Image library</Link> &mdash; browse every
            image available in <code>public/images/</code> and copy its path
            to use in your own pages.
          </li>
          <li>
            <a href="https://github.com/kaw393939/scrollytelling_spec_driven/tree/main/docs/specs">
              Specs
            </a>{" "}
            &mdash; what the site is supposed to do (10 short files).
          </li>
          <li>
            <a href="https://github.com/kaw393939/scrollytelling_spec_driven/tree/main/docs/phases">
              Phases
            </a>{" "}
            &mdash; the phased implementation plan (9 phases, trackable status).
          </li>
          <li>
            <a href="https://github.com/kaw393939/scrollytelling_spec_driven#readme">
              README
            </a>{" "}
            &mdash; process overview + AI-collaboration methodology.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem" }}>Status</h2>
        <p>
          Phase 00 (scaffold) is complete. The scrollytelling UI itself lands
          in Phases 01 &ndash; 08. Until then this page is intentionally plain.
        </p>
      </section>
    </main>
  );
}
