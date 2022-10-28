export default {
  registerCoach(context, data) {
    const coachData = {
      //Read the userId from the main store
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit("registerCoach", coachData);
  },
};
