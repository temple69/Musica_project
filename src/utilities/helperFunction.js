export const filterMusic = (data, number_to_filter) => {

    const filtered_charts = data.splice(0, number_to_filter).map((chart) => {
        const filtered_resuts = {
            id: chart.key,
            title: chart.title,
            imgUrl: chart.images.background,
            audioUrl: chart.hub.actions[1].uri
        }
        return filtered_resuts
    })
    return filtered_charts

}