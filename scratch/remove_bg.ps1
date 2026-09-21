Add-Type -AssemblyName System.Drawing
$inputFile = "c:\xampp\htdocs\pinguicolochita\img\yellow_rose_new2.png"
$outputFile = "c:\xampp\htdocs\pinguicolochita\img\yellow_rose_trans.png"
$bmp = [System.Drawing.Bitmap]::FromFile($inputFile)

# Use MakeTransparent for exact white
$bmp.MakeTransparent([System.Drawing.Color]::White)
$bmp.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "Done"
