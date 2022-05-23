const createJob = async (req, res) => {
		res.send('create job')
}
const getAllJobs = async (req, res) => {
		res.send('Get all jobs')
}
const deleteJob = async (req, res) => {
		res.send('delete job')
}
const updateJob = async (req, res) => {
		res.send(' job ipdated')
}
const showStats = async (req, res) => {
		res.send('Show Stats')
}


export {
		createJob, getAllJobs, deleteJob, updateJob, showStats
}