export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new DataTransfer().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    context.commit("addRequest", newRequest);
  },
};
