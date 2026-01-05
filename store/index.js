export default {
    state() {
        return {
            requests: [],
            addresses: [],
            guests: [],
            guestCount: 0,
        };
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        },
        setRequests(state, payload) {
            state.requests = payload;
        },
        addAddress(state, payload) {
            state.addresses.push(payload);
        },
        setAddresses(state, payload) {
            state.addresses = payload;
        },
        addGuests(state, payload) {
            state.guests.push(payload);
        },
        setGuests(state, payload) {
            state.guests = payload;
        },
        setGuestCount(state, payload) {
            state.guestCount = payload;
        }
    },
    actions: {
        async rsvp(context, payload) {
            const requestData = {
                fullName: payload.fullName,
                brideOrGroom: payload.brideOrGroom,
                guests: payload.additional_guests, 
                rsvp_date: payload.rsvp_date,
                //   message: payload.message,
            };
            // const response = await fetch(`https://clarissa-carlos-default-rtdb.firebaseio.com/newRequests.json`, { // fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`
            const response = await fetch(`https://clarissa-carlos-default-rtdb.firebaseio.com/newRequests.json`, {
                method: 'POST',
                body: JSON.stringify(requestData)
            })

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'failed to send request.');
                throw error;
            }

            requestData.id = responseData.name;
            requestData.coachId = payload.coachId;

            context.commit('addRequest', requestData);
        },
        async loadRequests(context) {
            const response = await fetch(`https://clarissa-carlos-default-rtdb.firebaseio.com/newRequests.json`);  // fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`)

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch data.');
                throw error;
            }

            const requests = [];
            for (const key in responseData) {
                const requestData = {
                    id: key,
                    fullName: responseData[key].fullName,
                    brideOrGroom: responseData[key].brideOrGroom,
                    guests: responseData[key].guests, 
                    rsvp_date: responseData[key]?.rsvp_date,
                };
                requests.push(requestData);
                // console.log(requestData);
            }
            context.commit('setRequests', requests);
        },
        async addGuests(context, payload) {
            const requestData = {
                user_id: payload.user_id,
                name: payload.name,
                brideOrGroom: payload.brideOrGroom,
                additionalGuests: payload.additionalGuests,
                hasChildren: payload.hasChildren
                //   message: payload.message,
            };
            const response = await fetch(`https://clarissa-carlos-default-rtdb.firebaseio.com/guests.json`, {
                method: 'POST',
                body: JSON.stringify(requestData)
            })

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'failed to send request.');
                throw error;
            }

            requestData.id = responseData.name;

            context.commit('addGuests', requestData);
        },
        async loadGuests(context) {
            const response = await fetch(`https://clarissa-carlos-default-rtdb.firebaseio.com/guests.json`);  // fetch(`https://vue-practice-88f8e-default-rtdb.firebaseio.com/requests/requests.json`)            

            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch data.');
                throw error;
            }

            const loadedGuests = [];
            for (const key in responseData) {
                const requestData = {
                    id: key,
                    user_id: responseData[key].user_id,
                    name: responseData[key].name,
                    brideOrGroom: responseData[key].brideOrGroom,
                    additionalGuests: responseData[key].additionalGuests,
                    hasChildren: responseData[key].hasChildren
                };
                loadedGuests.push(requestData);
                // console.log(requestData);
            }
            context.commit('setGuests', loadedGuests);
            context.commit('setGuestCount', loadedGuests.length);
        },
    },
    getters: {
        requests(state) {  // _, _2, rootGetters
            // const coachId = rootGetters.userId;
            return state.requests; //   return state.requests.filter((req) => req.coachId === coachId);
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        },
        requestsCount(_, getters) {
            return getters.requests.length;
        },
        addresses(state) {
            return state.addresses;
        },
        hasAddresses(_, getters) {
            return getters.addresses && getters.addresses.length > 0;
        },
        guests(state) {
            return state.guests;
        },
        hasGuests(_, getters) {
            return getters.guests && getters.guests.length > 0;
        }
    },
};
