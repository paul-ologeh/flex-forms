import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const EditableLabel = ({
  initialValue,
  save,
  currentState,
  disableKeys,
  inputClass,
  labelClass,
  inputName,
  inputId,
  bold,
  italic,
  underline,
  textSize,
}) => {
  const [view, setView] = useState("label");
  const [value, setValue] = useState(initialValue);
  const [previous, setPrevious] = useState(initialValue);
  const textInput = useRef(null);

  useEffect(() => {
    if (view === "text") {
      textInput.current.focus();
    }
  }, [view, textInput]);

  useEffect(() => {
    currentState(view);
    // eslint-disable-next-line
  }, [view]);

  const keyUp = (e) => {
    if (disableKeys === true) {
      return;
    }

    if (e.key === "Escape") {
      setValue(previous);
      setView("label");
    } else if (e.key === "Enter") {
      setValue(e.target.value);
      setPrevious(e.target.value);
      setView("label");

      save(e.target.value);
    }
  };

  const renderLabel = () => {
    return (
      <span
        className={labelClass !== undefined ? labelClass : ""}
        onDoubleClick={(e) => {
          setView("text");
        }}
        onTouchEnd={(e) => {
          setView("text");
        }}
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
          textDecoration: underline ? "underline" : "",
          fontSize: textSize,
        }}
      >
        {value}
      </span>
    );
  };

  const renderInput = () => {
    return (
      <div>
        <input
          type="text"
          value={value}
          ref={textInput}
          className={inputClass !== undefined ? inputClass : ""}
          id={inputId !== undefined ? inputId : ""}
          name={inputName !== undefined ? inputName : ""}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={(e) => {
            setView("label");
            setPrevious(e.target.value);

            save(e.target.value);
          }}
          onKeyUp={keyUp}
        />
      </div>
    );
  };

  return view === "label" ? renderLabel() : renderInput();
};

EditableLabel.propTypes = {
  initialValue: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  inputName: PropTypes.string,
  inputId: PropTypes.string,
  disableKeys: PropTypes.bool,
};

export default EditableLabel;
