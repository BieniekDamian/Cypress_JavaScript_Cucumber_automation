import { inputFields } from "./selectors/inputFields";
import { anchors } from "./selectors/anchors";
import { buttons } from "./selectors/buttons";
import { divs } from "./selectors/divs";
import { spans } from "./selectors/spans";

export let selectors = {};
Object.assign(selectors, inputFields, anchors, buttons, divs, spans);