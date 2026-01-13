// import { auth } from '@/firebase/index.js';

export default {
    state() {
        return {
            requests: [],
            addresses: [],
            guests: [],
            guestCount: 0,
            guestForm: null,
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
        updateGuest(state, updated) {
            //  state.guests.push(payload);
            const index = state.guests.findIndex(g => g.id === updated.id);

            if (index !== -1) {
                state.guests[index] = {
                    ...updated,
                    additionalGuests: [...updated.additionalGuests]
                };
            }
            // if (index !== -1) {
            //     state.guests.splice(index, 1, updated);
            // }
        },
        setGuests(state, payload) {
            state.guests = payload;
        },
        setGuestCount(state, payload) {
            state.guestCount = payload;
        },
        setGuestForm(state, payload) {
            state.guestForm = payload;
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
        async updateGuest(context, payload) {
            const guestID = payload.id;

            const requestData = {
                user_id: payload.user_id,
                name: payload.name,
                brideOrGroom: payload.brideOrGroom,
                additionalGuests: payload.additionalGuests,
                hasChildren: payload.hasChildren
            };

            const response = await fetch(`https://clarissa-carlos-default-rtdb.firebaseio.com/guests/${guestID}.json`, {
                method: 'PATCH',
                body: JSON.stringify(requestData)
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to update guest.');
            }

            context.commit('updateGuest', { id: guestID, ...requestData });
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
            }
            context.commit('setGuests', loadedGuests);
            context.commit('setGuestCount', loadedGuests.length);
        },
        // async loadRsvpGuest(context, payload) {
        //     const uid = auth.currentUser.uid;
        //     const url = `https://clarissa-carlos-default-rtdb.firebaseio.com/guests.json?orderBy="user_id"&equalTo="${uid}"`;

        //     const response = await fetch(url);
        //     const data = await response.json();

        //     if (!response.ok) {
        //         throw new Error(data.Error || "Failed to fetch guest");
        //     }

        //     // Firebase returns an object keyed by ID
        //     const guests = [];
        //     for (const key in data) {
        //         guests.push({ id: key, ...data[key] });
        //     }

        //     // Return the first (should be only) RSVP for this user
        //     const guest = guests[0] || null;

        //     console.log(guest);

        //     // Commit to Vuex store for editing
        //     context.commit("setGuestForm", guest ? { ...guest } : null);
        // }
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
