
Pod::Spec.new do |s|
  s.name         = "RNIronSource"
  s.version      = "1.0.0"
  s.summary      = "RNIronSource"
  s.description  = <<-DESC
                  RNIronSource
                   DESC
  s.homepage     = "https://github.com/hoavo/react-native-ironsource"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/hoavo/react-native-ironsource.git", :tag => "master" }
  s.source_files  = "ios/**/*.{h,m,swift}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
