import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { lensPath, lensProp, set, view } from "ramda";

import ProfileLayout from "../ProfileLayout";
import { DataContainer } from "../../shared";
import {
  UPDATE_AGE,
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_HOBBIES,
  UPDATE_LANGUAGES
} from "../../shared/constants";

const ButtonContainer = styled.div`
  margin-top: 3vh;
  margin-left: 10vw;
`;

const EditProfileData = () => {
  const [formFields, setFormFields] = useState({
    age: "",
    name: "",
    email: "",
    hobbies: { personal: [], work: [] },
    languages: []
  });

  const pathMap = {
    age: lensProp("age"),
    name: lensProp("name"),
    email: lensProp("email"),
    hobbies: {
      personal: lensPath(["hobbies", "personal"]),
      work: lensPath(["hobbies", "work"])
    },
    languages: lensProp("languages")
  };

  const profile = useSelector(state => state.profile.profile);

  useEffect(() => {
    if (profile) {
      setFormFields(profile);
    }
  }, [profile, setFormFields]);

  const dispatch = useDispatch();

  const onChangeStandard = e =>
    setFormFields(set(pathMap[e.target.id], e.target.value, formFields));

  const onChangeForArrays = (e, path) => {
    const dataCopy = swapItem(
      view(path, formFields),
      e.target.getAttribute("data-index"),
      e.target.value
    );
    setFormFields(set(path, dataCopy, formFields));
  };

  const swapItem = (arr, index, value) => {
    const copy = [...arr];
    copy.splice(index, 1, value);
    return copy;
  };

  const handleFormSubmit = () => {
    dispatch({ type: UPDATE_AGE, payload: formFields.age });
    dispatch({ type: UPDATE_NAME, payload: formFields.name });
    dispatch({ type: UPDATE_EMAIL, payload: formFields.email });
    dispatch({ type: UPDATE_HOBBIES, payload: formFields.hobbies });
    dispatch({ type: UPDATE_LANGUAGES, payload: formFields.languages });
  };

  // const onChangeHobbies = e => {
  //   const path = pathMap.hobbies[e.target.getAttribute("name")];
  //   const dataCopy = swapItem(
  //     view(path, formFields),
  //     e.target.getAttribute("data-index"),
  //     e.target.value
  //   );
  //   setFormFields(set(path, dataCopy, formFields));
  // };

  // const onChangeLanguages = e => {
  //   const path = pathMap[e.target.getAttribute("name")];
  //   const dataCopy = swapItem(
  //     view(path, formFields),
  //     e.target.getAttribute("data-index"),
  //     e.target.value
  //   );
  //   setFormFields(set(path, dataCopy, formFields));
  // };

  return formFields ? (
    <ProfileLayout>
      <DataContainer className="data-container">
        <div className="info">
          <label htmlFor="name">Name: </label>
          <input
            onChange={onChangeStandard}
            id="name"
            type="text"
            value={formFields.name}
          ></input>
        </div>
        <div className="info">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            onChange={onChangeStandard}
            value={formFields.email}
          ></input>
        </div>
        <div className="info">
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="number"
            onChange={onChangeStandard}
            value={formFields.age}
          ></input>
        </div>
        <div className="info">
          <label>Personal Hobbies: </label>
          {formFields.hobbies.personal.map((hobby, i) => {
            const id = 234324 + i;
            return (
              <Fragment key={id}>
                <label htmlFor={id}></label>
                <input
                  name="personal"
                  id={id}
                  data-index={i}
                  type="text"
                  value={hobby}
                  onChange={e => {
                    const path = pathMap.hobbies[e.target.getAttribute("name")];
                    onChangeForArrays(e, path);
                  }}
                ></input>
                <br />
              </Fragment>
            );
          })}
        </div>
        <div className="info">
          <span>Work Hobbies: </span>
          {formFields.hobbies.work.map((hobby, i) => {
            const id = 24324234 + i;

            return (
              <Fragment key={id}>
                <label htmlFor={id}></label>
                <input
                  name="work"
                  id={id}
                  type="text"
                  data-index={i}
                  value={hobby}
                  onChange={e => {
                    const path = pathMap.hobbies[e.target.getAttribute("name")];
                    onChangeForArrays(e, path);
                  }}
                ></input>
                <br />
              </Fragment>
            );
          })}
        </div>
        <div className="info">
          <span>Languages: </span>
          {formFields.languages.map((language, i) => {
            const id = 98723 + i;

            return (
              <Fragment key={id}>
                <label htmlFor={id}></label>
                <input
                  id={id}
                  data-index={i}
                  name="languages"
                  type="text"
                  value={language}
                  onChange={e => {
                    const path = pathMap[e.target.getAttribute("name")];
                    onChangeForArrays(e, path);
                  }}
                ></input>
                <br />
              </Fragment>
            );
          })}
        </div>
      </DataContainer>
      <ButtonContainer>
        <button onClick={handleFormSubmit}>Apply</button>
        <button onClick={() => setFormFields(profile)}>Cancel</button>
      </ButtonContainer>
    </ProfileLayout>
  ) : null;
};
export default EditProfileData;
