import Testinominal from "./Testinominal";
import { content } from "./testinominals";

export default () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {content.map((item, index) => (
        <Testinominal
          key={index}
          videoProp={item.videoProp}
          textProp={item.textProp}
        />
      ))}
    </div>
  );
};
