import {
  ButtonPrimary,
  ButtonSecondary,
  Input,
} from "@/modules/common/components";
import SidebarContainer from "../components/SidebarContainer";
import TriviaContainer from "../components/TriviaContainer";

const Homepage = () => {
  return (
    <main className="w-[48.750rem] overflow-hidden h-auto flex justify-start gap-[1.641rem] pt-[2.531rem]">
      {/* <UpdateProfileModal /> */}
      <SidebarContainer />
      <div className="overflow-auto">
        <TriviaContainer />
        <Input label="Full Name" />
        <ButtonSecondary text="Cancel" />
        <ButtonPrimary size="lg" text="Auto Select" />
      </div>
    </main>
  );
};

export default Homepage;
