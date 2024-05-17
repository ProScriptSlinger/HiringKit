import VideoCmp from "@/components/VideoCmp";
import TextPart from "./TextPart";
import { VideoProp } from "@/components/VideoCmp";
import { TextPartProp } from "./TextPart";

export interface TestinominalProp {
  textProp: TextPartProp[];
  videoProp: VideoProp;
}

export default (props: TestinominalProp) => {
  const { textProp, videoProp } = props;
  return (
    <div
      className={`flex justify-center items-center pt-16 gap-12 ${
        !videoProp.left && "flex-row-reverse"
      }`}
    >
      <VideoCmp {...videoProp} />
      <TextPart textProp={textProp} />
    </div>
  );
};
