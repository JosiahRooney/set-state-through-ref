import React, { useRef, useEffect, RefObject } from "react";
import AddToCalendarHOC from "react-add-to-calendar-hoc";

interface IButtonProps {
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <div className="AddToCalendar-button" onClick={onClick}>
      {children}
    </div>
  );
};

const Dropdown: React.FC = ({ children }) => {
  return <div className="AddToCalendar-dropdown">{children}</div>;
};

interface IAddToCalendarProps {
  event: {
    description?: string;
    duration: string | number;
    endDatetime: string;
    location?: string;
    startDatetime: string;
    timezone?: string;
    title: string;
  };
  buttonText?: string;
}

export const AddToCalendar: React.FC<IAddToCalendarProps> = ({
  buttonText = "Add to Calendar",
  event,
}) => {
  const AddToCalendar = AddToCalendarHOC(Button, Dropdown);
  const hocRef = useRef() as RefObject<any>; // set your RefObject type accordingly

  const handleClick = (e: MouseEvent) => {
    const element = e.target as HTMLElement;

    if (
      element &&
      element.className !== "AddToCalendar-button" &&
      hocRef.current.state.dropdownOpen
    ) {
      hocRef.current.handleDropdownToggle(e);
    }
  };

  useEffect(() => {
    if (hocRef) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="AddToCalendar" title="Add to your calendar">
      <AddToCalendar buttonText={buttonText} event={event} ref={hocRef} />
    </div>
  );
};

export default AddToCalendar;
