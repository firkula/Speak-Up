#1
library("SpeakUp")

#2
data <- getData("Data.csv")

#3
gender <- getGender(data)

#4
age <- getAge(data)

#5
outcomes <- getOutcome(data)

#6
plotAgeDistribution(age)

#7
plotOutcomeDistribution(outcomes)

#8
plotGenderDistribution(gender)

#9
createMultiplot(gender, age, outcomes)

#10
speakerScore <- calculateSpeakerScore(data)

#11
plotSpeakerScoreDistribution(speakerScore)

#12
plotSpeakerScoresByGender(gender, speakerScore)

#13
plotSpeakerScoresByAge(age, speakerScore)

#14
plotSpeakerScoresByOutcome(outcomes, speakerScore)

#15
standardizeData(data, gender, age, outcomes, speakerScore)

#16
model <- buildModel(data)

#17
plotFeatureImportance(model)

#18
plotPredictedSpeakerScores(data, model)

#19
evaluateModel(model)

#20
predictSpeakerScores(model, data)

#21
createInteractiveReport(data, gender, age, outcomes, model, speakerScore)

#22
explainModel(model)

#23
createShinyApp(model)

#24
exportModel(model)

#25
updateSpeakerScore(speakerScore, data)

#26
generateRecommendations(speakerScore, data)

#27
speakUp(data, gender, age, outcomes, model, speakerScore)

#28
conclude(data)

#29
createSummary(data, gender, age, outcomes, model, speakerScore)

#30
saveResults(data, gender, age, outcomes, model, speakerScore)