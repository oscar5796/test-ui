import { actionTypes } from 'constants/actionTypes';

export const appState = {
  people: [
    {
      name: "Kanye West",
      imageSrc: "assets/images/kanye_west.jpg",
      briefDescription:
        "Donec vel vehicula leo. Duis facilisis dolor a ex tempus efficitur. Sed in metus vitae turpis blandit consequat. Nunc vitae.",
      upvotes: 64,
      downvotes: 36,
      totalVotes: 100
    },
    {
      name: "Mark Zuckerberg",
      imageSrc: "assets/images/mark_zuckerberg.jpg",
      briefDescription:
        "Donec vel vehicula leo. Duis facilisis dolor a ex tempus efficitur. Sed in metus vitae turpis blandit consequat. Nunc vitae.",
      upvotes: 36,
      downvotes: 64,
      totalVotes: 100
    },
    {
      name: "Cristina Fernández de Kirchner",
      imageSrc: "assets/images/kirchner.jpg",
      briefDescription:
        "Donec vel vehicula leo. Duis facilisis dolor a ex tempus efficitur. Sed in metus vitae turpis blandit consequat. Nunc vitae.",
      upvotes: 36,
      downvotes: 64,
      totalVotes: 100
    },
    {
      name: "Malala Yousafzai",
      imageSrc: "assets/images/yousafzai.jpg",
      briefDescription:
        "Donec vel vehicula leo. Duis facilisis dolor a ex tempus efficitur. Sed in metus vitae turpis blandit consequat. Nunc vitae.",
      upvotes: 64,
      downvotes: 36,
      totalVotes: 100
    },
  ],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    //case related to workspaces service call

    case actionTypes.SET_NEW_DATA: {
      return {
        state,
        ...action.newState
      }
    }

    default:
      return state;
  }
};