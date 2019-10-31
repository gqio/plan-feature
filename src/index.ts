import { LitElement, css, html, TemplateResult, CSSResult } from "lit-element";

class FeatureItem extends LitElement {
  public get limit(): number | undefined {
    let limit = this.getAttribute("limit");
    if (!limit) return undefined;
    return Number.parseInt(limit) || Number.POSITIVE_INFINITY;
  }

  public get marker(): string | number {
    let limit = this.limit;
    if (!limit) return String.fromCharCode(0x2713);
    else if (limit === Number.POSITIVE_INFINITY)
      return String.fromCharCode(0x221e);
    else return limit;
  }

  public render(): TemplateResult {
    return html`
      <span style="color:var(--color-accent)">${this.marker}</span>
      <span><slot></slot></span>
    `;
  }

  public static get styles(): CSSResult {
    return css`
      :host {
        display: grid;
        text-align: left;
        grid-gap: 10px;
        grid-template-columns: 20px 1fr;
        font-size: 0.9em;
        font-weight: 300;
        color: var(--color-text-lower);
      }
    `;
  }
}

class FeatureList extends LitElement {
  public render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
  public static get styles(): CSSResult {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 10px;
      }
      ::slotted(*) {
        margin: 5px;
      }
    `;
  }
}

window.customElements.define("feature-list", FeatureList);
window.customElements.define("feature-item", FeatureItem);
