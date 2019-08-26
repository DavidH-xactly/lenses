import React from "react";
import { useSelector } from "react-redux";
import * as _ from "lodash";

import ProfileLayout from "../ProfileLayout";
import { DataContainer } from "../../shared";

const ProfileData = () => {
  const {
    age,
    name,
    email,
    hobbies: { personal, work },
    languages
  } = useSelector(state => state.profile.profile);
  return (
    <ProfileLayout>
      <DataContainer className="data-container">
        <div className="info">
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div className="info">
          <span>Email: </span>
          <span>{email}</span>
        </div>
        <div className="info">
          <span>Age: </span>
          <span>{age}</span>
        </div>
        <div className="info">
          <span>Personal Hobbies: </span>
          <ul>
            {personal.map(hobby => (
              <li key={_.uniqueId()}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="info">
          <span>Work Hobbies: </span>
          <ul>
            {work.map(hobby => (
              <li key={_.uniqueId()}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="info">
          <span>Hobbies: </span>
          <ul>
            {languages.map(language => (
              <li key={_.uniqueId()}>{language}</li>
            ))}
          </ul>
        </div>
      </DataContainer>
    </ProfileLayout>
  );
};

export default ProfileData;
