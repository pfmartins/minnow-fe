const pods = [
    { locationName: 'Location A', pods: [{ name: 'Pod event', onlineStatus: true }, { name: 'Pod double', onlineStatus: true }, { name: 'Pod cart', onlineStatus: false }] },
    { locationName: 'Location B', pods: [{ name: 'Pod class', onlineStatus: false }, { name: 'Pod event', onlineStatus: true }] },
    { locationName: 'Location C', pods: [{ name: 'Pod pah', onlineStatus: false }, { name: 'Pod event', onlineStatus: true }, { name: 'Consolidate pod', onlineStatus: true }, { name: 'New pod', onlineStatus: true }] }
]

const reports = [
    { title: 'Location A', amount: 34, improvement: 25, filters: [{ podName: 'Pod event' }] },
    { title: 'Location B', amount: 23, improvement: 17, filters: [{ podName: 'Pod class' }] },
    { title: 'Location C', amount: 12, improvement: 39, filters: [{ podName: 'Pod pah' }] }
]

const PodService = {
    getPods: () => {
        return Promise.resolve(pods)
            .catch((e) => console.debug(e))
    },
    getReports: () => {
        return Promise.resolve(reports)
            .catch((e) => console.debug(e))
    }
}

export default PodService;