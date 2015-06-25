<div class='section narrow'>
  <h1 class='section'>How It Works</h1>
  <img class='section' src="/plugins/nodebb-theme-4dflow/assets/images/bg1.jpg" width="678" />
  <div class='section'>
      4D Flow is based on MRI phase contrast imaging. Phase images that are generated by
      an MRI are motion sensitive. Hence, the data can be used to acuqire local velocities
      of moving spins. To do this, a specialized 4D Flow pulse sequence is required and must
      be installed on the scanner. There are clinical and research versions, depending on 
      the vendor. If it's a research scanner, the sequence is usually a WIP.
      
      Instead of acquiring 2D single slices (while forcing an already compromised patient to
      hold their breath), the 4D Flow acquisition is now a volume scan combined with a highly
      sophisticated motion correction algorithm. In other words, specific localization is no
      longer necessary and therefore a cardiologist or cardiac radiologist does not need to 
      be present during the scan. Instead, an MR technologist just needs to be at the scanner
      to prescribe scan parameters. And, for the patient, who might not be able to hold their 
      breath, the procedure is  far more comfortable and much faster. 
      
      Once the scanner is fully configured for 4D Flow acquisitions, studies may be performed.
      The technologist places a cube that bounds the three dimensional chest of the patient 
      and then acquires the whole volume.
      
      Upon completion, raw data is reconstructed into a comprehensive DICOM file containing
      anatomy and flow information for every location in the scanned volume.
      
      <b>Warning:</b> The resultant file extremely large (5GB and above), considering that it
      now includes magnitude (anatomic) data over several cardiac phases (i.e. 20 time points) 
      and separate series for each of the three flow directions.
      
      The 4D Flow DICOM file is then sent to a local hospital computer or to the cloud for
      post-processing. Local computers must be specifically configured, sized and maintained
      to handle large datasets and their computational requirements. If 4D Flow data is being 
      pushed to the cloud, uploads are usually complete in 5 to 10 minutes, depending on local
      upload rates. Cloud computing offers the advantage of parallelization of on-demand scalable
      servers that dynamically adapt to dataset sizes to deliver high performance real-time 
      rendering and analysis.
  </p>
  </div>
  <div class='separator'></div>

  <div class='section center'>
    <a href='#' class='btn'>Prev</a>
    <a href='#' class='btn btn-primary'>Next</a>
  </div>
    
</div>
