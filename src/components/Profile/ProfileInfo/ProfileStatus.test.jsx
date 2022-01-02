import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status={"hueta"} />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hueta");
  });

  test("span should be displayed after creation", () => {
    const component = create(<ProfileStatus status={"hueta"} />);
    const root = component.root;
    let span = root.findAllByType("span");
    expect(span.length).toBe(1);
  });

  test("span should be displayed with status from props", () => {
    const component = create(<ProfileStatus status={"hueta"} />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("hueta");
  });

  test("after creation input should not be displayed", () => {
    const component = create(<ProfileStatus status={"hueta"} />);
    const root = component.root;
    let input = root.findAllByType("input");
    expect(input.length).toBe(0);
  });

  test("input should be displayed in edit mode", () => {
    const component = create(<ProfileStatus status={"hueta"} />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("hueta");
  });

  test("callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = create(
      <ProfileStatus status={"hueta"} updateStatus={mockCallBack} />
    );
    const instance = component.getInstance();
    instance.toggleEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
