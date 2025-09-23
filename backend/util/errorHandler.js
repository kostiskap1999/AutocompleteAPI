// simple error handling function which can be expanded for detailed answers in a larger project and used globally
function handleError(res, err, fallbackMessage = 'Something went wrong') {
  let status = 500
  let message = err.message || fallbackMessage

  if (err.code === 'ER_DUP_ENTRY')
    status = 409
  else if (err.name === 'NotFoundError')
    status = 404
  else if (err.response && err.response.status)
    status = err.response.status

  console.error(err)
  res.status(status).json({ error: message })
}

module.exports = { handleError }
