# Pipelines

## How to use

```
from transformers import pipeline

sentiment_analysis_pipeline = pipeline("sentiment-analysis")

sentiment_analysis_result = sentiment_analysis_pipeline(text)

print(sentiment_analysis_result)
```

## List

| **Pipeline Name** | **Technical Name** | **Short Description** |
|---|---|---|
| Text Summarization | summarization | Summarizes a piece of text into a shorter, more concise version. |
| Question Answering (QA) | question-answering | Provides answers to questions posed in natural language. |
| Chatbot Development | conversational-agents-training | Enables the creation of conversational agents that can engage in natural and meaningful conversations. |
| Sentiment Analysis | sentiment-analysis | Determines the emotional tone of a piece of text, identifying whether the text is positive, negative, or neutral. |
| Machine Translation (MT) | translation | Translates text from one language to another, enabling cross-cultural communication. |
| Code Generation | code-generation | Automates tasks, generates new software, and debugs code by converting natural language instructions into working code. |
| Data Analysis | data-analysis | Extracts insights from structured data, helping businesses make informed decisions. |
| Image Generation | image-generation | Creates images from text descriptions, allowing for artistic expression and data visualization. |
| Music Generation | music-generation | Creates music from text descriptions, enabling the creation of original compositions. |
| Video Generation | video-generation | Creates videos from text descriptions, allowing for the production of creative content and educational materials. |
| Creative Text Generation | creative-text-generation | Generates creative text formats, such as poems, scripts, musical pieces, email, and letters. |
| Natural Language Translation (NLT) | ntt-translation | Translates text from one language to another, preserving its meaning and style. |
| Natural Language Editing (NLE) | nel-editing | Edits and improves text for clarity, grammar, style, and overall effectiveness. |
| Text-to-Code Generation | t2c-generation | Generates code from natural language descriptions, enabling automation and code generation. |
| Code-to-Text Generation | c2t-generation | Generates natural language descriptions from code, facilitating code understanding and documentation. |
| Text-to-Image Generation | t2i-generation | Generates images from natural language descriptions, allowing for creative visual representations. |
| Image-to-Text Generation | i2t-generation | Generates natural language descriptions from images, enabling image captioning and interpretation. |
| Text-to-Music Generation | t2m-generation | Generates music from natural language descriptions, allowing for creative music composition. |

## Complex example of 3D animation of a beating heart

```
import os
import random
import transformers
import numpy as np
from transformers import pipeline
from PIL import Image

# Load the medical images and musical data
medical_images = []
for i in range(10):
    medical_image_path = f"medical_image_{i}.png"
    medical_images.append(Image.open(medical_image_path))

musical_data = "musical_data.mp3"

# Understand the specific requirements of the animation
qa_model = pipeline("question-answering")
question = "What is the desired style, perspective, and level of detail for the animation?"
answer = qa_model(question)

desired_style = answer["answer"]["answer_content"].split()[0]
desired_perspective = answer["answer"]["answer_content"].split()[1]
desired_level_of_detail = int(answer["answer"]["answer_content"].split()[2])

# Analyze the medical images and extract key features
data_analysis_model = pipeline("data-analysis")
features = data_analysis_model(medical_images)

# Generate a 3D model of the heart based on the extracted features and medical images
image_generation_model = pipeline("image-generation")
heart_image = image_generation_model(features=features, desired_style=desired_style)

# Capture the motion of a real heartbeat and use it to animate the 3D model
motion_capture_model = pipeline("motion-capture")
motion_capture_data = motion_capture_model("heartbeat.mp4")

# Generate a musical composition that reflects the rhythm of the heartbeat
music_generation_model = pipeline("music-generation")
music_composition = music_generation_model(motion_capture_data)

# Combine the animated 3D heart model, the musical composition, and background imagery to create a complete 3D animation
video_generation_model = pipeline("video-generation")
video = video_generation_model(image=heart_image, music=music_composition, background_image="background.png")

# Save the video
video_filename = "heartbeat_animation.mp4"
video.save(video_filename)
```
