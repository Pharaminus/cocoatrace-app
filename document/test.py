import qrcode

# URL que vous voulez encoder dans le QR code
url = "https://youtu.be/CiNv30xoTZc?si=4ZjXe8V_sKqoyyPY"

# Générer le QR code
qr = qrcode.QRCode(
    version=1,  # version=1 signifie la plus petite taille de QR code
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # Niveau de correction d'erreur (L : faible)
    box_size=10,  # Taille de chaque "boîte" du QR code
    border=4,  # Largeur de la bordure
)
qr.add_data(url)
qr.make(fit=True)

# Créer une image du QR code
img = qr.make_image(fill='black', back_color='white')

# Sauvegarder l'image
img.save("qrcode_site_web.png")
