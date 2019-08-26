import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  margin-left: 10vw;
`;

const ProfileLayout = props => {
  return (
    <div className="profile-layout">
      <TitleWrapper>
        <h1>Your Profile Info</h1>
      </TitleWrapper>
      {props.children}
    </div>
  );
};
export default ProfileLayout;
