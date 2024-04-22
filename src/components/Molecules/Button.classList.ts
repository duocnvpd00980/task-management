import { ListProperties } from "../Atoms";

class Button extends ListProperties {
  active() {
    return {
      transform: { ...this.transform },
      appearance: { ...this.appearance, fill: ["blue", "80"] },
    };
  }
}

export const createButton:any = {

  primary: new Button(
    { w: 120, h: 40, x: 100, y: 50, align: "center", valign: "middle" },
    { fill:["orange", "30"], stroke: [2, "orange"], radii: 6 },
    { color: ["purple", "30"], fontSize: 16, fontStyle: "bold", leading: 1.2, kerning: 1},
    "justify","allCaps"
  ),
  secondary: new Button(
    { w: 120, h: 40, x: 100, y: 50, align: "center", valign: "middle" },
    { fill:["green", "30"], stroke: [2, "black"], radii: 6 },
    { color: ["purple", "30"], fontSize: 16, fontStyle: "bold", leading: 1.2, kerning: 1},
    "justify","allCaps"
  ),
};
createButton["primary-active"] = createButton.primary.active();
createButton["secondary-active"] = createButton.secondary.active();
