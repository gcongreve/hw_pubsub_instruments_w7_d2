const PubSub = {
  publish: function(channel, payload){
    console.log(`pubsub is publishing on channel: ${channel} . with the payload: ${payload}`);
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    console.log(`pubsub is subscribed to channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
