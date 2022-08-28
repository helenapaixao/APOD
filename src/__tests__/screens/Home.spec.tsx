const axios = require('axios')



jest.mock('axios')

it('returns data', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        copyright: "adasd",
        explanation: "sdasdas",
        url: "sdasdas",
        title: "sdsdasdas"
      }
    ]
  })
})

