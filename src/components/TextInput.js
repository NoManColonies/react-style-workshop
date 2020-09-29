import React, { useCallback } from "react";

function TextInput({ value, setValue }) {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleClear = useCallback(() => {
    setValue("");
  }, [setValue]);

  return (
    <>
      <form action="" method="" onSubmit={handleSubmit}>
        <input name="input" value={value} onChange={handleInputChange} />
        <button type="submit" name="submit" children={"submit"} />
      </form>
      <button
        type="button"
        name="clear"
        children={"clear"}
        onClick={handleClear}
      />
    </>
  );
}

export default TextInput;
