#AppPool and hostnames
 
$rootPath = Convert-Path .
$hostnames = "api.ichallenge.local","app.ichallenge.local"
 
Import-Module WebAdministration
 
#iterate over $hostnames
foreach($hostname in $hostnames){
    $iisAppPoolName = $hostname
    $iisAppPoolDotNetVersion = "v4.0"
    $iisAppName = $hostname
    $directoryPath = ""
   
    switch($hostname){
        "app.ichallenge.local" { $directoryPath = ($rootPath + "\IChallenge.App\dist") }
        "api.ichallenge.local" { $directoryPath = ($rootPath + "\IChallenge.Api\bin\Debug\netcoreapp1.0\publish") }
    }
   
    #navigate to the app pools root
    cd IIS:\AppPools\
   
    #check if the app pool exists
    if (!(Test-Path $iisAppPoolName -pathType container))
    {
        #create the app pool
        $appPool = New-Item $iisAppPoolName
        $appPool | Set-ItemProperty -Name "managedRuntimeVersion" -Value $iisAppPoolDotNetVersion
        $appPool | Set-ItemProperty -Name "processModel.identityType" -Value "NetworkService"
           
        write ("Created AppPool: " + $iisAppPoolName)
    }
    else
    {
        write ("AppPool: '" + $iisAppPoolName + "' already exists")
    }
   
    #navigate to the sites root
    cd IIS:\Sites\
   
    #check if the site exists
    if (Test-Path $iisAppName -pathType container)
    {
        write ("Site: '" + $iisAppName + "' already exists, continuing...")
    }
    else
    {
        #create the site
        $iisApp = New-Item $iisAppName -bindings @{protocol="https";bindingInformation=":443:" + $iisAppName} -physicalPath $directoryPath
        $iisApp | Set-ItemProperty -Name "applicationPool" -Value $iisAppPoolName
        write ("Created site: '" + $iisAppname + "'")
    }
   
    $hostsfile = "C:\Windows\System32\drivers\etc\hosts"
    $hostsfileRecord =  ("127.0.0.1 `t`t" + $hostname)
   
    $file = Get-Content $hostsfile
    $containsRecord = $file | %{$_ -match $hostsfileRecord}
    if($containsRecord -contains $true){
        write "It contains the record!"
    }else{
        write "It does NOT contain the record"
           
        ("`r`n" + $hostsfileRecord) | Out-File -encoding ASCII -append $hostsfile
        write "Updated hosts file."
    }
}
