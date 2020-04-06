
export default theme => ({

  alert: {
    fontSize: 15,
    color: '#fff',
    padding: 15,
    border: '1px solid transparent',
    borderRadius: 2,
    marginBottom: 20,
  },

  alertTitle: {
    fontSize: 18,
    marginBottom: 10,
  },

  alertMessage: {
    marginBottom: 0,
  },

  alertSuccess: {
    backgroundColor: '#4CAF50',
  },

  alertInfo: {
    backgroundColor: '#60a7d633',
    color: theme.palette.text.primary,
  },

  alertWarning: {
    backgroundColor: '#FFC107',
  },

  alertDanger: {
    backgroundColor: '#F44336',
  },

});
