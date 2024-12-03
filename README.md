### Reverse engineering McDonalds app

This is reserch.

The McDonald's app utilizes Google APIs for integrity checks and exhibits vulnerabilities related to SSL unpinning. Additionally, it validates SSL transparency, which can be a point of interest for further analysis.


Google Play integrity check doesn't allow you to launch app on rooted device or emulator. I tried on emulator to hook `__system_property_read_callback` and modify but unsuccessful.
