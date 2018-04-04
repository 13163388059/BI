const
  def_config = {
    type: 'GET',
    url: '',
    async: 'true',
    data: '',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function () {}
  },
  def_post_config = Object.assign(def_config, {
    type: "POST",
  }),
  def_get_config = Object.assign(def_config, {
    type: "GET",
  })


const origin = 'http://139.129.237.60:1102/WCKJAPI_MD/'



export {
  def_config,
  origin
}
