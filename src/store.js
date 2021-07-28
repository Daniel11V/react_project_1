import { createStore } from "redux";

const quotes = [
    {
        id: 0,
        frase: "The best time to plant a tree was 20 years ago. The second best time is now.",
        autor: "Chinese Proverb",
        color: "#27ae60"
    },
    {
        id: 1,
        frase: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do",
        autor: "Bob Dylan",
        color: "#76daff"
    },
    {
        id: 2,
        frase: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
        autor: "Mae Jemison",
        color: "#2c3e50"
    }
]


const initialState = {
    quote: quotes[Math.floor(Math.random() * 3)]
}


const reducerQuote = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_QUOTE":
            console.log(state.quote.id)
            if (state.quote.id === 2) {
                return {
                    quote: quotes[0]
                }
            } else {
                return {
                    quote: quotes[state.quote.id + 1]
                }
            }
        default:
            return state;
    }
}

export default createStore(reducerQuote);