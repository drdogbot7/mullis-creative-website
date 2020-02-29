/**
 * Loading fontawesome using SVG Core
 */

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/pro-light-svg-icons";

export default () => {
  library.add( faArrowDown );
}