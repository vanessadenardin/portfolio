folders="css js"

for folder in $folders; do
    for i in $(ls $folder); do
        echo
        echo $folder/$i:
        echo
        hash=$(openssl dgst -sha512 -binary $folder/$i | base64)
        if [ $folder = "css" ]; then
            echo \<link rel=\"stylesheet\" href=\"$folder/$i\" integrity=\"sha512-$hash\"\/\>
        elif [ $folder = "js" ]; then            
            echo \<script src=\"$folder/$i\" integrity=\"sha512-$hash\"\/\>\<\/script\>
        fi    
        echo
    done
done
