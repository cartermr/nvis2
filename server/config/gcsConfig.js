const fs = require('fs')

fs.writeFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, process.env.GC_CRED, (err) => {
    if (err) throw err
})