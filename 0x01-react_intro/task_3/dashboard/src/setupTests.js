import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-18";
import { TextEncoder, TextDecoder } from "text-encoding";

Enzyme.configure({ adapter: new Adapter() });
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
