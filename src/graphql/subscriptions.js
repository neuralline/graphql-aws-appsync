/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateByRoomId = /* GraphQL */ `
  subscription OnCreateByRoomId($roomId: String!) {
    onCreateByRoomId(roomId: $roomId) {
      id
      message
      roomId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      roomId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      message
      roomId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      message
      roomId
      createdAt
      updatedAt
    }
  }
`;
