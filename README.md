# AWS Polly IIFE

Download the [release](https://github.com/ppzreboot/aws-polly-iife.js/releases) and then...

``` html
<!DOCTYPE html>
<html>
    <head>
        <title>Awesome App</title>
    </head>
    <body>
        <div>This is an awesome app.</div>
        <script src='asset/lib/ppz-molly.js'></script>
        <!-- <script src='asset/lib/ppz-molly.min.js'></script> -->
        <script>
            const client = new PPzPolly.PollyClient({
                region: 'ap-east-1',
                credentials: {
                    // ...
                }
            })
            const command = new SynthesizeSpeechCommand({
                Engine: 'neural',
                LanguageCode: 'ja-JP',
                OutputFormat: 'mp3',
                SampleRate: '44100',
                Text: '一緒にスーパーで卵を買いましょう',
                TextType: 'text',
                VoiceId: 'Takumi',
            })

            client.send(command)
            // ...
        </script>
    </body>
</html>
```
