import { DOMRenderer } from "dom-renderer";
import { documentReady } from "web-utility";

import { IndexPage } from "./page";

documentReady.then(() => new DOMRenderer().render(<IndexPage />));
